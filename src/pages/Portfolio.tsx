import React from "react";
import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PortfolioCard } from "@/components/PortfolioCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { Plus, Sparkles, Search } from "lucide-react";
import { Project } from "@/types";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";

const VISIBILITY_FILTER = "is_hidden.is.null,is_hidden.eq.false";

const Portfolio = () => {
  const navigate = useNavigate();
  const [popularProjects, setPopularProjects] = useState<Project[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [searchQuery, setSearchQuery] = useState("");
  const categories = ["전체", "AI 기초", "AI 활용", "로봇"];
  const [user, setUser] = useState<any>(null);
  const ITEMS_PER_PAGE = 12;

  useEffect(() => {
    fetchPopularProjects().then(setPopularProjects);
    supabase.auth.getUser().then(({ data: { user } }) => setUser(user));
  }, []);

  const stripHtml = (html: string | null | undefined) => {
    if (!html) return "";
    return html.replace(/<[^>]*>/g, " ");
  };

  const matchesSearch = (project: { title?: string | null; description?: string | null; tags?: string[] | null }) => {
    if (!searchQuery) return true;
    const term = searchQuery.toLowerCase();
    const inTitle = project.title?.toLowerCase().includes(term);
    const inDescription = stripHtml(project.description).toLowerCase().includes(term);
    const inTags = project.tags?.some(tag => tag?.toLowerCase().includes(term));
    return Boolean(inTitle || inDescription || inTags);
  };

  const buildProjectsQuery = (
    pageParam: number,
    skipVisibilityFilter = false
  ) => {
    let query = supabase
      .from("projects")
      .select(
        `
        *,
        profiles (name, avatar_url)
      `,
        { count: "exact" }
      )
      .order("created_at", { ascending: false })
      .range(pageParam * ITEMS_PER_PAGE, (pageParam + 1) * ITEMS_PER_PAGE - 1);

    if (!skipVisibilityFilter) {
      query = query.or(VISIBILITY_FILTER);
    }

    if (selectedCategory !== "전체") {
      query = query.eq("category", selectedCategory);
    }

    return query;
  };

  const fetchProjects = useCallback(async ({ pageParam = 0 }) => {
    const executeQuery = (skipVisibilityFilter = false) =>
      buildProjectsQuery(pageParam, skipVisibilityFilter);

    let { data: projectsData, error, count } = await executeQuery();

    if (error && error.message?.includes("is_hidden")) {
      ({ data: projectsData, error, count } = await executeQuery(true));
    }

    if (error || !projectsData) {
      console.error("Failed to fetch projects:", error);
      return { data: [], nextPage: undefined, total: 0 };
    }

    const filteredProjects = projectsData.filter(matchesSearch);

    if (filteredProjects.length > 0) {
      const projectsWithCounts = await Promise.all(
        filteredProjects.map(async (project) => {
          const [commentResult, likeResult] = await Promise.all([
            supabase
              .from('project_comments')
              .select('*', { count: 'exact', head: true })
              .eq('project_id', project.id),
            supabase
              .from('project_likes')
              .select('*', { count: 'exact', head: true })
              .eq('project_id', project.id)
          ]);
          
          return {
            ...project,
            commentCount: commentResult.count || 0,
            likeCount: likeResult.count || 0,
            view_count: project.view_count || 0
          };
        })
      );

      return {
        data: projectsWithCounts as Project[],
        nextPage: filteredProjects.length === ITEMS_PER_PAGE ? pageParam + 1 : undefined,
        total: count || 0
      };
    }

    return { data: [], nextPage: undefined, total: 0 };
  }, [selectedCategory, searchQuery]);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    refetch
  } = useInfiniteQuery({
    queryKey: ['projects', selectedCategory, searchQuery],
    queryFn: fetchProjects,
    getNextPageParam: (lastPage) => lastPage.nextPage,
    initialPageParam: 0,
  });

  useEffect(() => {
    refetch();
  }, [selectedCategory, searchQuery, refetch]);

  const fetchPopularProjects = async () => {
    const executeQuery = (skipVisibilityFilter = false) => {
      let query = supabase
        .from("projects")
        .select(`
          *,
          profiles (name, avatar_url)
        `)
        .order("view_count", { ascending: false })
        .limit(3);

      if (!skipVisibilityFilter) {
        query = query.or(VISIBILITY_FILTER);
      }

      return query;
    };

    let { data: projectsData, error } = await executeQuery();

    if (error && error.message?.includes("is_hidden")) {
      ({ data: projectsData, error } = await executeQuery(true));
    }

    if (!error && projectsData) {
      const projectsWithCounts = await Promise.all(
        projectsData.map(async (project) => {
          const [commentResult, likeResult] = await Promise.all([
            supabase
              .from('project_comments')
              .select('*', { count: 'exact', head: true })
              .eq('project_id', project.id),
            supabase
              .from('project_likes')
              .select('*', { count: 'exact', head: true })
              .eq('project_id', project.id)
          ]);
          
          return {
            ...project,
            commentCount: commentResult.count || 0,
            likeCount: likeResult.count || 0,
            view_count: project.view_count || 0
          };
        })
      );
      
      return projectsWithCounts;
    }
    return [];
  };

  const projects = data?.pages.flatMap(page => page.data) || [];

  const getOptimizedImageUrl = (url: string | null) => {
    if (!url) return null;
    if (url.includes('supabase.co/storage')) {
      return `${url}?width=400&quality=80`;
    }
    return url;
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>포트폴리오 - 학생 프로젝트 모음</title>
        <meta name="description" content="학생들이 만든 AI와 로봇공학 프로젝트를 확인하세요. 다양한 카테고리와 태그로 검색할 수 있습니다." />
        <meta property="og:title" content="포트폴리오 - 학생 프로젝트 모음" />
        <meta property="og:description" content="학생들이 만든 AI와 로봇공학 프로젝트를 확인하세요" />
        <meta property="og:type" content="website" />
      </Helmet>
      <Navbar />
      
      {/* Hero Header Section */}
      <div className="relative pt-24 pb-8 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10" />
        
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-3 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-2">
              <Sparkles className="h-3 w-3 text-primary" />
              <span className="text-xs font-medium text-primary">Student Showcase</span>
            </div>
            <h1 className="font-heading text-xl md:text-2xl font-bold bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent leading-tight">
              학생 프로젝트
            </h1>
          </div>

          {/* Add Project Button */}
          {user && (
            <div className="flex justify-center mt-4 animate-fade-in">
              <Button 
                onClick={() => navigate("/portfolio/create")} 
                size="sm"
                className="hover-scale shadow-lg hover:shadow-xl transition-all"
              >
                <Plus className="mr-2 h-4 w-4" />
                프로젝트 등록
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="pb-20 px-4">
        <div className="container mx-auto">
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8 animate-fade-in">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="제목, 설명, 태그로 검색..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 text-sm"
              />
            </div>
          </div>

          {/* Popular Projects Section */}
          {popularProjects.length > 0 && (
            <div className="mb-12 max-w-4xl mx-auto animate-fade-in">
              <h2 className="font-heading text-base md:text-lg font-bold mb-4 text-center">
                🔥 인기 프로젝트
              </h2>
              <div className="space-y-3">
                {popularProjects.map((project) => (
                  <div
                    key={project.id}
                    onClick={() => navigate(`/portfolio/${project.id}`)}
                    className="cursor-pointer"
                  >
                    <PortfolioCard
                      id={project.id}
                      title={project.title}
                      description={project.description}
                      category={project.category || "기타"}
                      tags={project.tags || []}
                      student={project.profiles?.name || "익명"}
                      commentCount={project.commentCount || 0}
                      likeCount={project.likeCount || 0}
                      viewCount={project.view_count || 0}
                      avatarUrl={project.profiles?.avatar_url || null}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8 animate-fade-in">
            {categories.map((category, index) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="hover-scale transition-all text-sm"
                size="sm"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {category}
              </Button>
            ))}
          </div>

          <h2 className="font-heading text-sm md:text-base font-semibold mb-4 text-center max-w-4xl mx-auto">
            모든 프로젝트
          </h2>

          {/* Projects List */}
          {isLoading ? (
            <div className="text-center py-20">
              <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-muted-foreground">로딩 중...</p>
            </div>
          ) : (
            <>
              <div className="max-w-4xl mx-auto space-y-3">
                {projects.map((project, index) => (
                  <div
                    key={project.id}
                    onClick={() => navigate(`/portfolio/${project.id}`)}
                    className="cursor-pointer animate-fade-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <PortfolioCard
                      id={project.id}
                      title={project.title}
                      student={project.profiles?.name || "익명"}
                      description={project.description}
                      category={project.category || "기타"}
                      tags={project.tags || []}
                      commentCount={project.commentCount || 0}
                      likeCount={project.likeCount || 0}
                      viewCount={project.view_count || 0}
                      avatarUrl={project.profiles?.avatar_url || null}
                    />
                  </div>
                ))}
              </div>

              {projects.length === 0 && (
                <div className="text-center py-20 animate-fade-in">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-muted/50 flex items-center justify-center">
                    <Sparkles className="h-10 w-10 text-muted-foreground/50" />
                  </div>
                  <p className="text-lg text-muted-foreground">
                    이 카테고리에 프로젝트가 없습니다
                  </p>
                </div>
              )}

              {hasNextPage && (
                <div className="flex justify-center mt-8">
                  <Button
                    onClick={() => fetchNextPage()}
                    disabled={isFetchingNextPage}
                    variant="outline"
                  >
                    {isFetchingNextPage ? "로딩 중..." : "더 보기"}
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Portfolio;
