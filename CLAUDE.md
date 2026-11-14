# 프로젝트 가이드

@AGENTS.md

## 스택

Next.js (App Router) + TypeScript, Tailwind CSS, shadcn/ui, Motion, React Hook Form + Zod. 패키지 매니저는 **pnpm**만 사용한다. 용도(포트폴리오/웹앱/프로필)에 종속되지 않는 범용 스타터 킷이다.

## 규칙

- 코드 주석, 커밋 메시지, 문서는 한국어로 작성한다. 변수명/함수명은 영어를 사용한다.
- 경로 별칭 `@/*`는 `src/*`를 가리킨다.
- 사이트명, 기술 스택, 기능 목록 등 데이터는 `src/lib/site-config.ts`에서 관리한다.
- UI 컴포넌트는 `src/components/ui`(shadcn)를 우선 재사용한다. 추가는 `pnpm dlx shadcn@latest add <name>`.
- 이 프로젝트는 `cacheComponents`가 켜져 있다. `new Date()`, 파일 읽기 등 비결정적 값은 `"use cache"` 또는 `<Suspense>`로 처리한다.
- 동적 라우트에는 `generateStaticParams`를 정의한다.

## 검증

변경 후 `pnpm lint`, `pnpm typecheck`, `pnpm build`가 통과해야 한다. 포맷은 `pnpm format`.
