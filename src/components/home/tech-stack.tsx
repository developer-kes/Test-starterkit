import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { techStack } from "@/lib/site-config";
import { Section } from "./section";

export function TechStack() {
  return (
    <Section
      id="stack"
      title="기술 스택"
      description="바로 쓸 수 있도록 미리 구성된 도구들입니다."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {techStack.map((tech) => (
          <a
            key={tech.name}
            href={tech.href}
            target="_blank"
            rel="noreferrer"
            className="group"
          >
            <Card className="group-hover:bg-muted/50 h-full transition-colors">
              <CardHeader>
                <Badge variant="outline" className="w-fit">
                  {tech.tag}
                </Badge>
                <CardTitle className="flex items-center gap-1.5">
                  {tech.name}
                  <ExternalLink className="text-muted-foreground size-3.5" />
                </CardTitle>
                <CardDescription>{tech.description}</CardDescription>
              </CardHeader>
            </Card>
          </a>
        ))}
      </div>
    </Section>
  );
}
