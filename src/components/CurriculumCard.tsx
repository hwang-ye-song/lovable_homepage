import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CurriculumCardProps {
  id: string;
  title: string;
  description: string;
  level: string;
  duration: string;
  icon: React.ReactNode;
}

export const CurriculumCard = ({ id, title, description, level, duration, icon }: CurriculumCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-all hover-scale">
      <CardHeader>
        <div className="flex items-center gap-3 mb-2">
          <div className="text-primary">{icon}</div>
          <span className="text-xs font-medium text-accent uppercase tracking-wide">{level}</span>
        </div>
        <CardTitle className="font-heading">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">기간: {duration}</p>
      </CardContent>
      <CardFooter>
        <Link to={`/curriculum/${id}`} className="w-full">
          <Button variant="outline" className="w-full group">
            자세히 보기
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};
