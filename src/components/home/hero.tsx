import * as motion from "motion/react-client";
import { Code } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6 py-10 text-center"
    >
      <Badge variant="secondary">Next.js · TypeScript · Tailwind</Badge>
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
        {siteConfig.name}
      </h1>
      <p className="text-muted-foreground mx-auto max-w-xl text-lg">
        {siteConfig.description}
      </p>
      <div className="flex justify-center gap-3">
        <Button render={<a href="#quick-start" />}>시작하기</Button>
        <Button
          variant="outline"
          render={
            <a href={siteConfig.githubUrl} target="_blank" rel="noreferrer" />
          }
        >
          <Code className="size-4" />
          GitHub
        </Button>
      </div>
    </motion.section>
  );
}
