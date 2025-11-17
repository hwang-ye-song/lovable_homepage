import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Users, ArrowLeft } from "lucide-react";

const curriculumData: Record<string, any> = {
  basic: {
    title: "Basic Track",
    level: "Beginner",
    duration: "12 weeks",
    students: "150+ enrolled",
    description: "Build a strong foundation in AI concepts, programming fundamentals, and logical thinking.",
    objectives: [
      "Understand core AI concepts and terminology",
      "Learn Python programming basics",
      "Explore machine learning fundamentals",
      "Complete hands-on coding projects"
    ],
    stages: [
      {
        name: "Introduction to AI",
        duration: "3 weeks",
        topics: ["What is AI?", "History of AI", "AI Applications", "Ethics in AI"]
      },
      {
        name: "Programming Basics",
        duration: "4 weeks",
        topics: ["Python syntax", "Data structures", "Algorithms", "Problem solving"]
      },
      {
        name: "Machine Learning 101",
        duration: "3 weeks",
        topics: ["Supervised learning", "Training models", "Data preprocessing", "Model evaluation"]
      },
      {
        name: "Final Project",
        duration: "2 weeks",
        topics: ["Project planning", "Implementation", "Testing", "Presentation"]
      }
    ],
    projects: [
      "🎮 Simple game with AI opponent",
      "📊 Data analysis dashboard",
      "🔍 Image classifier"
    ]
  },
  application: {
    title: "Application Track",
    level: "Intermediate",
    duration: "16 weeks",
    students: "120+ enrolled",
    description: "Apply AI techniques to real-world problems and develop practical solutions.",
    objectives: [
      "Master advanced machine learning algorithms",
      "Build end-to-end AI applications",
      "Work with neural networks and deep learning",
      "Deploy AI models to production"
    ],
    stages: [
      {
        name: "Advanced ML Algorithms",
        duration: "4 weeks",
        topics: ["Decision trees", "Random forests", "SVM", "Neural networks"]
      },
      {
        name: "Deep Learning",
        duration: "5 weeks",
        topics: ["CNN architecture", "Transfer learning", "Model optimization", "TensorFlow/PyTorch"]
      },
      {
        name: "NLP & Computer Vision",
        duration: "4 weeks",
        topics: ["Text processing", "Sentiment analysis", "Object detection", "Image segmentation"]
      },
      {
        name: "Capstone Project",
        duration: "3 weeks",
        topics: ["Real-world problem", "Solution design", "Implementation", "Deployment"]
      }
    ],
    projects: [
      "🎤 Voice-activated assistant",
      "🖼️ Real-time object detector",
      "💬 Chatbot with NLP"
    ]
  },
  robot: {
    title: "Robot Track",
    level: "Advanced",
    duration: "20 weeks",
    students: "80+ enrolled",
    description: "Design, build, and program intelligent robotic systems from scratch.",
    objectives: [
      "Understand robotics hardware and sensors",
      "Program autonomous navigation systems",
      "Integrate AI with physical systems",
      "Build complete robotic solutions"
    ],
    stages: [
      {
        name: "Robotics Fundamentals",
        duration: "5 weeks",
        topics: ["Hardware components", "Sensors & actuators", "Motor control", "Power systems"]
      },
      {
        name: "Programming Robots",
        duration: "5 weeks",
        topics: ["ROS basics", "Sensor integration", "Motion planning", "Path finding"]
      },
      {
        name: "AI for Robotics",
        duration: "5 weeks",
        topics: ["Computer vision", "Localization", "SLAM", "Behavior planning"]
      },
      {
        name: "Final Robot Project",
        duration: "5 weeks",
        topics: ["Design", "Build", "Program", "Competition"]
      }
    ],
    projects: [
      "🤖 Line-following robot",
      "🎯 Object manipulation arm",
      "🚗 Autonomous navigation rover"
    ]
  }
};

const CurriculumDetail = () => {
  const { id } = useParams<{ id: string }>();
  const curriculum = id ? curriculumData[id] : null;

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
          <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-primary mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <Badge className="mb-4">{curriculum.level}</Badge>
                <h1 className="font-heading text-5xl font-bold mb-4">{curriculum.title}</h1>
                <p className="text-xl text-muted-foreground">{curriculum.description}</p>
              </div>

              {/* Learning Objectives */}
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading">Learning Objectives</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {curriculum.objectives.map((objective: string, index: number) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <span>{objective}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Stage Roadmap */}
              <div>
                <h2 className="font-heading text-3xl font-bold mb-6">Course Roadmap</h2>
                <div className="space-y-4">
                  {curriculum.stages.map((stage: any, index: number) => (
                    <Card key={index}>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="font-heading text-xl">
                            Stage {index + 1}: {stage.name}
                          </CardTitle>
                          <Badge variant="outline">{stage.duration}</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {stage.topics.map((topic: string, topicIndex: number) => (
                            <Badge key={topicIndex} variant="secondary">
                              {topic}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Example Projects */}
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading">Example Projects</CardTitle>
                  <CardDescription>What you'll build in this track</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {curriculum.projects.map((project: string, index: number) => (
                      <li key={index} className="text-lg">{project}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
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

      <Footer />
    </div>
  );
};

export default CurriculumDetail;
