import { Features } from "@/components/home/features";
import { Hero } from "@/components/home/hero";
import { QuickStart } from "@/components/home/quick-start";
import { Structure } from "@/components/home/structure";
import { TechStack } from "@/components/home/tech-stack";

export default function Home() {
  return (
    <div className="space-y-16">
      <Hero />
      <TechStack />
      <Features />
      <QuickStart />
      <Structure />
    </div>
  );
}
