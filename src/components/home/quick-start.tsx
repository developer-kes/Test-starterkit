import { quickStartSteps } from "@/lib/site-config";
import { Section } from "./section";

export function QuickStart() {
  return (
    <Section
      id="quick-start"
      title="빠른 시작"
      description="네 단계면 로컬에서 실행할 수 있습니다."
    >
      <ol className="space-y-3">
        {quickStartSteps.map((step, index) => (
          <li key={step.command} className="flex items-center gap-3">
            <span className="bg-primary text-primary-foreground flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-medium">
              {index + 1}
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium">{step.label}</p>
              <code className="bg-muted block overflow-x-auto rounded-md px-3 py-1.5 font-mono text-sm">
                {step.command}
              </code>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
