import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, ArrowLeft, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

interface Track {
  name: string;
  duration: string;
  description: string;
  topics: string[];
}

interface MediaAsset {
  type: string;
  title: string;
  emoji: string;
}

interface Curriculum {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  level: string;
  duration: string;
  students: string;
  tracks: Track[];
  mediaAssets: MediaAsset[];
}

const fetchCurriculums = async (): Promise<Record<string, Curriculum>> => {
  const response = await fetch("/data/curriculums.json");
  if (!response.ok) {
    throw new Error("Failed to fetch curriculum data");
  }
  return response.json();
};

const CurriculumDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [showBackToTop, setShowBackToTop] = useState(false);

  const { data: curriculums, isLoading, error } = useQuery({
    queryKey: ["curriculums"],
    queryFn: fetchCurriculums,
  });

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading curriculum...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 text-destructive">Error loading curriculum</h1>
          <p className="text-muted-foreground mb-4">Please try again later</p>
          <Link to="/">
            <Button>Go Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const curriculum = id ? curriculums?.[id] : null;

  if (!curriculum) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Curriculum not found</h1>
          <Link to="/">
            <Button>Go Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-12 px-4 bg-gradient-to-br from-background to-primary/5">
        <div className="container mx-auto">
          <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-primary mb-6 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Header */}
              <div>
                <Badge className="mb-4">{curriculum.level}</Badge>
                <h1 className="font-heading text-5xl font-bold mb-4">{curriculum.title}</h1>
                <p className="text-2xl text-primary font-medium mb-4">{curriculum.subtitle}</p>
                <p className="text-lg text-muted-foreground">{curriculum.description}</p>
              </div>

              {/* Three-Stage Roadmap */}
              <div>
                <h2 className="font-heading text-3xl font-bold mb-6">Three-Stage Roadmap</h2>
                <div className="space-y-6">
                  {curriculum.tracks.map((track, index) => (
                    <Card key={index} className="border-l-4 border-l-primary">
                      <CardHeader>
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <CardTitle className="font-heading text-xl mb-2">
                              {track.name}
                            </CardTitle>
                            <CardDescription className="text-base">
                              {track.description}
                            </CardDescription>
                          </div>
                          <Badge variant="outline" className="shrink-0">
                            {track.duration}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          {track.topics.map((topic, topicIndex) => (
                            <div key={topicIndex} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0"></div>
                              <span className="text-sm text-muted-foreground">{topic}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Media Gallery */}
              <div>
                <h2 className="font-heading text-3xl font-bold mb-6">Project Gallery</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {curriculum.mediaAssets.map((asset, index) => (
                    <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-6xl">
                        {asset.emoji}
                      </div>
                      <CardContent className="p-3">
                        <p className="text-sm font-medium text-center">{asset.title}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle className="font-heading">Course Info</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Duration</p>
                      <p className="font-medium">{curriculum.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Students</p>
                      <p className="font-medium">{curriculum.students}</p>
                    </div>
                  </div>
                  <Button className="w-full mt-4" size="lg">
                    Enroll Now
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    14-day money-back guarantee
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <Button
          onClick={scrollToTop}
          size="icon"
          className="fixed bottom-8 right-8 rounded-full shadow-lg z-40"
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}

      <Footer />
    </div>
  );
};

export default CurriculumDetail;
