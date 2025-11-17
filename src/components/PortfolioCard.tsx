import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PortfolioCardProps {
  title: string;
  student: string;
  description: string;
  category: string;
  image: string;
}

export const PortfolioCard = ({ title, student, description, category, image }: PortfolioCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-4xl">
        {image}
      </div>
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <Badge variant="secondary">{category}</Badge>
        </div>
        <CardTitle className="font-heading text-xl">{title}</CardTitle>
        <CardDescription>by {student}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};
