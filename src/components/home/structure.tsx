import { folderStructure } from "@/lib/site-config";
import { Section } from "./section";

export function Structure() {
  return (
    <Section
      id="structure"
      title="폴더 구조"
      description="주요 디렉터리의 역할입니다."
    >
      <dl className="divide-y rounded-lg border">
        {folderStructure.map((item) => (
          <div
            key={item.path}
            className="flex flex-col gap-1 px-4 py-3 sm:flex-row sm:items-center sm:gap-4"
          >
            <dt className="font-mono text-sm sm:w-56">{item.path}</dt>
            <dd className="text-muted-foreground text-sm">
              {item.description}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
