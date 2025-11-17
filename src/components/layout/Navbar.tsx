import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              홈
            </Link>
            <Link to="/curriculum/basic" className="text-foreground hover:text-primary transition-colors">
              커리큘럼
            </Link>
            <Link to="/portfolio" className="text-foreground hover:text-primary transition-colors">
              포트폴리오
            </Link>
            <Link to="/faculty" className="text-foreground hover:text-primary transition-colors">
              교수진
            </Link>
            <Link to="/login">
              <Button variant="default">로그인</Button>
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
            <Link
              to="/"
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              홈
            </Link>
            <Link
              to="/curriculum/basic"
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              커리큘럼
            </Link>
            <Link
              to="/portfolio"
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              포트폴리오
            </Link>
            <Link
              to="/faculty"
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              교수진
            </Link>
            <Link to="/login" onClick={() => setIsOpen(false)}>
              <Button variant="default" className="w-full">로그인</Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};
