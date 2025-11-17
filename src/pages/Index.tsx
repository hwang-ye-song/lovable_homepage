import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CurriculumCard } from "@/components/CurriculumCard";
import { PortfolioCard } from "@/components/PortfolioCard";
import { FacultyCard } from "@/components/FacultyCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bot, Brain, Cpu, Lightbulb, ArrowRight, Rocket } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-background to-primary/5">
        <div className="container mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-accent/10 rounded-full">
            <span className="text-accent font-medium text-sm">차세대 학습</span>
          </div>
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            AI & 로봇공학 아카데미
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            실습 중심의 AI와 로봇공학 교육을 통해 청소년들이 내일의 혁신가가 되도록 지원합니다
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group">
              시작하기
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Link to="/curriculum/basic">
              <Button size="lg" variant="outline">
                커리큘럼 탐색
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Learning Roadmap */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold mb-4">Your Learning Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Follow a structured path from fundamentals to advanced robotics
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl mx-auto">
            <div className="flex-1 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Lightbulb className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2">1. Basic Track</h3>
              <p className="text-sm text-muted-foreground">Foundation in AI concepts</p>
            </div>
            
            <ArrowRight className="hidden md:block h-8 w-8 text-accent" />
            
            <div className="flex-1 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Brain className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2">2. Application Track</h3>
              <p className="text-sm text-muted-foreground">Apply AI to real problems</p>
            </div>
            
            <ArrowRight className="hidden md:block h-8 w-8 text-accent" />
            
            <div className="flex-1 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Rocket className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2">3. Robot Track</h3>
              <p className="text-sm text-muted-foreground">Build intelligent robots</p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold mb-4">Our Curriculum</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Three progressive tracks designed to build comprehensive AI and robotics skills
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CurriculumCard
              id="basic"
              title="Basic Track"
              description="Master the fundamentals of AI and programming"
              level="Beginner"
              duration="12 weeks"
              icon={<Lightbulb className="h-8 w-8" />}
            />
            <CurriculumCard
              id="application"
              title="Application Track"
              description="Apply AI concepts to solve real-world problems"
              level="Intermediate"
              duration="16 weeks"
              icon={<Brain className="h-8 w-8" />}
            />
            <CurriculumCard
              id="robot"
              title="Robot Track"
              description="Design and build intelligent robotic systems"
              level="Advanced"
              duration="20 weeks"
              icon={<Bot className="h-8 w-8" />}
            />
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="font-heading text-4xl font-bold mb-4">Student Projects</h2>
              <p className="text-muted-foreground">See what our students have created</p>
            </div>
            <Link to="/portfolio">
              <Button variant="outline">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PortfolioCard
              title="AI Chess Player"
              student="Sarah Chen"
              description="A machine learning model that plays chess at intermediate level"
              category="AI"
              image="♟️"
            />
            <PortfolioCard
              title="Voice Assistant"
              student="Alex Kumar"
              description="Natural language processing assistant for daily tasks"
              category="NLP"
              image="🎤"
            />
            <PortfolioCard
              title="Line Following Robot"
              student="Emma Wilson"
              description="Autonomous robot that navigates using computer vision"
              category="Robotics"
              image="🤖"
            />
          </div>
        </div>
      </section>

      {/* Faculty Preview */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="font-heading text-4xl font-bold mb-4">Meet Our Faculty</h2>
              <p className="text-muted-foreground">Learn from industry experts and educators</p>
            </div>
            <Link to="/faculty">
              <Button variant="outline">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FacultyCard
              name="Dr. James Park"
              title="Director of AI Programs"
              expertise={["Machine Learning", "Deep Learning", "Computer Vision"]}
              bio="15 years of experience in AI research and education"
              email="j.park@academy.ai"
            />
            <FacultyCard
              name="Prof. Maria Garcia"
              title="Robotics Lead"
              expertise={["Robotics", "Embedded Systems", "Control Theory"]}
              bio="Former NASA robotics engineer and educator"
              email="m.garcia@academy.ai"
            />
            <FacultyCard
              name="Dr. Lisa Wong"
              title="NLP Specialist"
              expertise={["NLP", "AI Ethics", "Data Science"]}
              bio="Published researcher in natural language processing"
              email="l.wong@academy.ai"
            />
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10">
        <div className="container mx-auto max-w-3xl text-center">
          <Cpu className="h-16 w-16 mx-auto mb-6 text-primary" />
          <h2 className="font-heading text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join hundreds of students learning AI and robotics
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1"
            />
            <Button size="lg">
              Register Now
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground mt-4">
            Free trial available. No credit card required.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
