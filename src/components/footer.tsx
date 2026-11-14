import { siteConfig } from "@/lib/site-config";

export async function Footer() {
  // 현재 연도는 빌드 시 캐시 (cacheComponents 환경에서 new Date() 사용 시 필요)
  "use cache";

  return (
    <footer className="text-muted-foreground border-t py-6 text-center text-sm">
      © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
    </footer>
  );
}
