# Starter Kit

포트폴리오, 웹 애플리케이션, 프로필 사이트를 빠르게 시작하기 위한 범용 Next.js 스타터 킷입니다.

## 기술 스택

- Next.js (App Router) + TypeScript
- Tailwind CSS + shadcn/ui
- Motion (애니메이션), next-themes (다크모드)
- React Hook Form + Zod (폼/검증)
- ESLint + Prettier, 패키지 매니저는 pnpm

## 시작하기

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

[http://localhost:3000](http://localhost:3000)에서 확인합니다.

## 주요 명령어

| 명령어           | 설명                |
| ---------------- | ------------------- |
| `pnpm dev`       | 개발 서버 실행      |
| `pnpm build`     | 프로덕션 빌드       |
| `pnpm lint`      | ESLint 검사         |
| `pnpm format`    | Prettier 포맷팅     |
| `pnpm typecheck` | TypeScript 타입검사 |

## 폴더 구조

```
src/
  app/                  페이지와 레이아웃
  components/
    ui/                 shadcn/ui 컴포넌트
    home/               홈 화면 섹션 (교체/삭제 가능)
  lib/
    site-config.ts      사이트명, 기술 스택, 기능 목록 등 데이터
```

## 커스터마이징

1. `src/lib/site-config.ts`에서 사이트명, 설명, 기술 스택, 기능 목록 수정
2. `src/components/home/`의 섹션을 프로젝트에 맞게 교체하거나 삭제
3. `src/app/globals.css`에서 색상 테마 조정
4. shadcn/ui 컴포넌트 추가: `pnpm dlx shadcn@latest add <name>`

## 배포 (Vercel)

1. GitHub에 저장소를 push
2. [Vercel](https://vercel.com)에서 저장소를 import
3. 환경변수 `NEXT_PUBLIC_SITE_URL`에 배포 도메인 설정

## 용도별 확장

필요할 때만 추가합니다.

- **포트폴리오/블로그**: MDX로 콘텐츠를 관리하려면 `@next/mdx`를 추가합니다.
- **웹 앱(인증/DB)**: `pnpm add @supabase/supabase-js @supabase/ssr` 후 `.env.local`에 `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`를 설정합니다.

## 참고

`cacheComponents`가 활성화되어 있습니다. `new Date()`나 파일 시스템 읽기처럼 요청마다 달라질 수 있는 값은 `"use cache"` 또는 `<Suspense>`로 감싸야 빌드가 통과합니다.
