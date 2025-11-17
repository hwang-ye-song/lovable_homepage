import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'curriculum', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 font-heading font-bold text-xl text-primary">
            <Bot className="h-6 w-6" />
            <span>AI & 로봇공학 아카데미</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('hero')} 
              className={`text-foreground hover:text-primary transition-colors ${activeSection === 'hero' ? 'text-primary font-semibold' : ''}`}
            >
              홈
            </button>
            <button 
              onClick={() => scrollToSection('curriculum')} 
              className={`text-foreground hover:text-primary transition-colors ${activeSection === 'curriculum' ? 'text-primary font-semibold' : ''}`}
            >
              커리큘럼
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')} 
              className={`text-foreground hover:text-primary transition-colors ${activeSection === 'portfolio' ? 'text-primary font-semibold' : ''}`}
            >
              포트폴리오
            </button>
            <Button onClick={() => scrollToSection('contact')} variant="default">
              상담하기
            </Button>
            <Link to="/login">
              <Button variant="outline">로그인</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <button
              onClick={() => scrollToSection('hero')}
              className={`block w-full text-left text-foreground hover:text-primary transition-colors ${activeSection === 'hero' ? 'text-primary font-semibold' : ''}`}
            >
              홈
            </button>
            <button
              onClick={() => scrollToSection('curriculum')}
              className={`block w-full text-left text-foreground hover:text-primary transition-colors ${activeSection === 'curriculum' ? 'text-primary font-semibold' : ''}`}
            >
              커리큘럼
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className={`block w-full text-left text-foreground hover:text-primary transition-colors ${activeSection === 'portfolio' ? 'text-primary font-semibold' : ''}`}
            >
              포트폴리오
            </button>
            <Button onClick={() => scrollToSection('contact')} variant="default" className="w-full">
              상담하기
            </Button>
            <Link to="/login">
              <Button variant="outline" className="w-full">로그인</Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};
