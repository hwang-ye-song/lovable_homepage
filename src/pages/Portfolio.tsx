import { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PortfolioCard } from "@/components/PortfolioCard";
import { Button } from "@/components/ui/button";
import { ProjectForm } from "@/components/ProjectForm";
import { ProjectDetail } from "@/components/ProjectDetail";
import { supabase } from "@/integrations/supabase/client";
import { Plus } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  category: string | null;
  tags: string[] | null;
  image_url: string | null;
  created_at: string;
  user_id: string;
  profiles: {
    name: string;
  };
}

const Portfolio = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [categories, setCategories] = useState<string[]>(["전체"]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    fetchProjects();
    supabase.auth.getUser().then(({ data: { user } }) => setUser(user));
  }, []);

  const fetchProjects = async () => {
    const { data, error } = await supabase
      .from('projects')
      .select(`
        *,
        profiles (name)
      `)
      .order('created_at', { ascending: false });

    if (!error && data) {
      setProjects(data as Project[]);
      
      // Extract unique categories
      const uniqueCategories = Array.from(
        new Set(data.map(p => p.category).filter(Boolean))
      ) as string[];
      setCategories(["전체", ...uniqueCategories]);
    }
  };

  const filteredProjects = selectedCategory === "전체"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-12 px-4">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="font-heading text-5xl font-bold mb-4">학생 프로젝트</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              우리 학생들이 만든 혁신적인 프로젝트를 탐색해보세요
            </p>
          </div>

          {/* Add Project Button */}
          {user && (
            <div className="flex justify-center mb-8">
              <Button onClick={() => setIsFormOpen(true)} size="lg">
                <Plus className="mr-2 h-5 w-5" />
                프로젝트 등록
              </Button>
            </div>
          )}

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="cursor-pointer"
              >
                <PortfolioCard
                  title={project.title}
                  student={project.profiles.name}
                  description={project.description}
                  category={project.category || "기타"}
                  image={project.image_url || "📁"}
                />
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                이 카테고리에 프로젝트가 없습니다
              </p>
            </div>
          )}
        </div>
      </div>

      <Footer />

      {/* Dialogs */}
      <ProjectForm
        open={isFormOpen}
        onOpenChange={setIsFormOpen}
        onSuccess={fetchProjects}
      />
      
      <ProjectDetail
        project={selectedProject}
        open={!!selectedProject}
        onOpenChange={(open) => !open && setSelectedProject(null)}
      />
    </div>
  );
};

export default Portfolio;
