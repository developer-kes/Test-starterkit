// Stop hook: 응답 종료 전 타입체크를 실행하고, 실패하면 오류를 Claude에게 되돌려 수정하게 한다.
import { spawnSync } from "node:child_process";

// stdin으로 전달되는 hook 입력(JSON)을 읽는다.
let raw = "";
for await (const chunk of process.stdin) raw += chunk;

let input = {};
try {
  input = JSON.parse(raw || "{}");
} catch {
  // 파싱 실패 시 기본값으로 계속 진행한다.
}

// 이미 hook 때문에 이어서 작업 중이면 무한 루프를 막기 위해 통과시킨다.
if (input.stop_hook_active) process.exit(0);

// Windows에서 pnpm.cmd를 실행하려면 shell 옵션이 필요하다.
const result = spawnSync("pnpm", ["typecheck"], {
  encoding: "utf8",
  shell: true,
  cwd: process.env.CLAUDE_PROJECT_DIR || process.cwd(),
});

if (result.status === 0) process.exit(0);

// 실패: stderr + exit 2로 Claude에게 오류를 전달한다.
const output = `${result.stdout ?? ""}${result.stderr ?? ""}`.trim();
console.error(`pnpm typecheck 실패. 아래 타입 오류를 수정하세요.\n\n${output}`);
process.exit(2);
