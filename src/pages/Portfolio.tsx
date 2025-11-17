import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PortfolioCard } from "@/components/PortfolioCard";
import { Button } from "@/components/ui/button";

const categories = ["전체", "AI", "로봇공학", "NLP", "컴퓨터 비전"];

const projects = [
  {
    title: "AI Chess Player",
    student: "Sarah Chen",
    description: "A machine learning model that plays chess at intermediate level using reinforcement learning",
    category: "AI",
    image: "♟️"
  },
  {
    title: "Voice Assistant",
    student: "Alex Kumar",
    description: "Natural language processing assistant for daily tasks with voice recognition",
    category: "NLP",
    image: "🎤"
  },
  {
    title: "Line Following Robot",
    student: "Emma Wilson",
    description: "Autonomous robot that navigates using computer vision and PID control",
    category: "Robotics",
    image: "🤖"
  },
  {
    title: "Facial Recognition System",
    student: "Michael Lee",
    description: "Real-time face detection and recognition using deep learning",
    category: "Computer Vision",
    image: "👤"
  },
  {
    title: "Sentiment Analysis Tool",
    student: "Olivia Martinez",
    description: "Analyzes social media posts to determine emotional sentiment",
    category: "NLP",
    image: "😊"
  },
  {
    title: "Object Sorting Robot",
    student: "James Brown",
    description: "Robotic arm that identifies and sorts objects by color and shape",
    category: "Robotics",
    image: "🦾"
  },
  {
    title: "Traffic Sign Detector",
    student: "Sophia Taylor",
    description: "Computer vision system for autonomous vehicle traffic sign detection",
    category: "Computer Vision",
    image: "🚦"
  },
  {
    title: "Music Generator AI",
    student: "Daniel White",
    description: "Neural network that composes original music in different genres",
    category: "AI",
    image: "🎵"
  },
  {
    title: "Warehouse Robot",
    student: "Isabella Garcia",
    description: "Autonomous navigation robot for warehouse inventory management",
    category: "Robotics",
    image: "📦"
  }
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "전체"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-12 px-4">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-heading text-5xl font-bold mb-4">Student Portfolio</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore innovative projects created by our talented students
            </p>
          </div>

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
            {filteredProjects.map((project, index) => (
              <PortfolioCard
                key={index}
                title={project.title}
                student={project.student}
                description={project.description}
                category={project.category}
                image={project.image}
              />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No projects found in this category</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Portfolio;
