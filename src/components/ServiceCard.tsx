import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features?: string[];
  className?: string;
  delay?: number;
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  features,
  className,
  delay = 0,
}: ServiceCardProps) {
  return (
    <div
      className={cn(
        "group bg-card border border-border rounded-2xl p-8 hover-lift shadow-card animate-fade-up",
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
        <Icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
      </div>
      <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>
      {features && features.length > 0 && (
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li
              key={index}
              className="text-sm text-muted-foreground flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              {feature}
            </li>
          ))}
        </ul>
      )}
      <Button asChild variant="outline" className="w-full">
        <Link to="/contact">Request Service</Link>
      </Button>
    </div>
  );
}
