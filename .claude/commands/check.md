---
description: 포맷, 린트, 타입검사, 빌드를 순서대로 실행하고 실패 시 원인을 진단해 수정합니다
allowed-tools: Bash(pnpm format:*), Bash(pnpm lint:*), Bash(pnpm typecheck:*), Bash(pnpm build:*), Bash(rm -rf .next)
---

프로젝트 품질 검증을 아래 순서대로 실행하세요. 규칙은 `CLAUDE.md`를 따릅니다.

## 실행 순서

1. `pnpm format`
2. `pnpm lint`
3. `pnpm typecheck`
4. `pnpm build`

## 실패 시 처리

단계가 실패하면 출력된 오류를 분석해 원인을 수정하고, **실패한 단계부터** 다시 실행하세요.

- **`cacheComponents` 관련 오류** (`new Date()`, 파일 시스템 읽기, runtime data 접근):
  - 요청마다 달라지지 않는 값은 해당 함수/컴포넌트에 `"use cache"`를 추가합니다.
  - 요청 시점 데이터가 필요하면 `<Suspense>`로 감쌉니다.
- **`.next/types/validator.ts` 타입 오류** (삭제하거나 이름을 바꾼 라우트가 원인):
  `.next` 폴더를 삭제(`rm -rf .next`)한 뒤 해당 단계를 재실행합니다.
- **import 오류**: 사용하는 라이브러리 버전에 해당 export가 있는지 확인하고 대체합니다
  (예: 최신 lucide-react에는 브랜드 아이콘이 없음).
- 원인이 분명하지 않으면 추측으로 고치지 말고 오류 내용을 보고하세요.

## 보고

모든 단계가 끝나면 한국어로 아래 형식으로 요약하세요.

| 단계      | 결과      |
| --------- | --------- |
| format    | 통과/실패 |
| lint      | 통과/실패 |
| typecheck | 통과/실패 |
| build     | 통과/실패 |

수정한 파일이 있으면 파일 경로와 수정 이유를 함께 적으세요.
