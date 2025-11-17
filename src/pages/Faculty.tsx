import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FacultyCard } from "@/components/FacultyCard";

const facultyMembers = [
  {
    name: "Dr. James Park",
    title: "Director of AI Programs",
    expertise: ["Machine Learning", "Deep Learning", "Computer Vision"],
    bio: "15 years of experience in AI research and education. Former lead scientist at major tech company.",
    email: "j.park@academy.ai"
  },
  {
    name: "Prof. Maria Garcia",
    title: "Robotics Lead",
    expertise: ["Robotics", "Embedded Systems", "Control Theory"],
    bio: "Former NASA robotics engineer with expertise in autonomous systems and space exploration.",
    email: "m.garcia@academy.ai"
  },
  {
    name: "Dr. Lisa Wong",
    title: "NLP Specialist",
    expertise: ["NLP", "AI Ethics", "Data Science"],
    bio: "Published researcher in natural language processing with focus on ethical AI development.",
    email: "l.wong@academy.ai"
  },
  {
    name: "Prof. Robert Chen",
    title: "Computer Vision Expert",
    expertise: ["Computer Vision", "Image Processing", "Neural Networks"],
    bio: "Industry veteran with 20+ years in computer vision and real-time image processing systems.",
    email: "r.chen@academy.ai"
  },
  {
    name: "Dr. Amanda Johnson",
    title: "AI Ethics Advisor",
    expertise: ["AI Ethics", "Policy", "Social Impact"],
    bio: "Leading expert in AI ethics and responsible AI development for educational institutions.",
    email: "a.johnson@academy.ai"
  },
  {
    name: "Prof. David Kim",
    title: "Embedded Systems Instructor",
    expertise: ["IoT", "Microcontrollers", "Hardware Design"],
    bio: "Specializes in teaching robotics hardware and embedded systems for educational purposes.",
    email: "d.kim@academy.ai"
  }
];

const Faculty = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-12 px-4">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-heading text-5xl font-bold mb-4">Our Faculty</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Learn from world-class instructors with deep expertise in AI, robotics, and education
            </p>
          </div>

          {/* Faculty Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facultyMembers.map((faculty, index) => (
              <FacultyCard
                key={index}
                name={faculty.name}
                title={faculty.title}
                expertise={faculty.expertise}
                bio={faculty.bio}
                email={faculty.email}
              />
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 rounded-lg p-12">
            <h2 className="font-heading text-3xl font-bold mb-4">Want to Join Our Team?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We're always looking for passionate educators and industry experts to join our faculty
            </p>
            <a href="mailto:careers@academy.ai" className="text-primary hover:underline font-medium">
              Contact us about opportunities
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Faculty;
