import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { features } from "@/lib/site-config";
import { Section } from "./section";

export function Features() {
  return (
    <Section
      id="features"
      title="주요 기능"
      description="처음부터 갖춰져 있어 설정에 시간을 쓰지 않아도 됩니다."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map(({ title, description, icon: Icon }) => (
          <Card key={title} className="h-full">
            <CardHeader>
              <Icon className="text-primary size-5" />
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </Section>
  );
}
