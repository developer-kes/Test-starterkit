import {
  Gauge,
  Moon,
  Rocket,
  Search,
  ShieldCheck,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

// 사이트 기본 정보 (이름/설명은 이곳에서 한 번만 수정)
export const siteConfig = {
  name: "Starter Kit",
  description:
    "포트폴리오, 웹 애플리케이션, 프로필 사이트를 빠르게 시작하는 Next.js 스타터 킷",
  githubUrl: "https://github.com",
};

export const navItems = [
  { href: "#stack", label: "기술 스택" },
  { href: "#features", label: "주요 기능" },
  { href: "#quick-start", label: "빠른 시작" },
  { href: "#structure", label: "폴더 구조" },
];

export type TechItem = {
  name: string;
  description: string;
  href: string;
  tag: string;
};

// 기술 스택 목록
export const techStack: TechItem[] = [
  {
    name: "Next.js",
    description: "App Router 기반 풀스택 React 프레임워크",
    href: "https://nextjs.org/docs",
    tag: "Framework",
  },
  {
    name: "TypeScript",
    description: "타입 안전한 개발 경험과 자동완성",
    href: "https://www.typescriptlang.org/docs",
    tag: "Language",
  },
  {
    name: "Tailwind CSS",
    description: "유틸리티 클래스로 빠르게 스타일링",
    href: "https://tailwindcss.com/docs",
    tag: "Styling",
  },
  {
    name: "shadcn/ui",
    description: "코드를 직접 소유하는 접근성 좋은 UI 컴포넌트",
    href: "https://ui.shadcn.com",
    tag: "UI",
  },
  {
    name: "Motion",
    description: "선언형 애니메이션과 인터랙션",
    href: "https://motion.dev",
    tag: "Animation",
  },
  {
    name: "React Hook Form",
    description: "가볍고 성능 좋은 폼 상태 관리",
    href: "https://react-hook-form.com",
    tag: "Form",
  },
  {
    name: "Zod",
    description: "스키마 기반 데이터 검증과 타입 추론",
    href: "https://zod.dev",
    tag: "Validation",
  },
  {
    name: "next-themes",
    description: "시스템 설정을 따르는 다크모드",
    href: "https://github.com/pacocoursey/next-themes",
    tag: "Theme",
  },
  {
    name: "pnpm",
    description: "빠르고 디스크 효율적인 패키지 매니저",
    href: "https://pnpm.io",
    tag: "Tooling",
  },
];

export type FeatureItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

// 주요 기능 목록
export const features: FeatureItem[] = [
  {
    title: "다크모드",
    description: "라이트/다크/시스템 테마를 기본 지원합니다.",
    icon: Moon,
  },
  {
    title: "반응형 레이아웃",
    description: "모바일부터 데스크톱까지 대응하는 기본 레이아웃.",
    icon: Smartphone,
  },
  {
    title: "SEO 기본 설정",
    description: "메타데이터와 Open Graph 기본값이 준비되어 있습니다.",
    icon: Search,
  },
  {
    title: "타입 안전",
    description: "TypeScript와 Zod로 런타임까지 안전하게.",
    icon: ShieldCheck,
  },
  {
    title: "빠른 성능",
    description: "정적 프리렌더링과 React Compiler가 적용되어 있습니다.",
    icon: Gauge,
  },
  {
    title: "즉시 배포",
    description: "GitHub 연동 후 Vercel에서 바로 배포할 수 있습니다.",
    icon: Rocket,
  },
];

export const quickStartSteps = [
  { label: "의존성 설치", command: "pnpm install" },
  { label: "환경변수 설정", command: "cp .env.example .env.local" },
  { label: "개발 서버 실행", command: "pnpm dev" },
  { label: "프로덕션 빌드", command: "pnpm build" },
];

export const folderStructure = [
  { path: "src/app", description: "페이지와 레이아웃 (App Router)" },
  { path: "src/components", description: "공통 컴포넌트" },
  { path: "src/components/ui", description: "shadcn/ui 컴포넌트" },
  { path: "src/components/home", description: "홈 화면 섹션 (교체/삭제 가능)" },
  { path: "src/lib", description: "유틸리티와 사이트 설정" },
  { path: "public", description: "정적 파일 (이미지, 아이콘)" },
];
