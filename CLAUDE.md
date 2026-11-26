# Frontier-Lab

AI 트렌드를 따라가며 공부하고, 직접 써 본 실험 결과를 쌓는 공개 사이트. 운영자의 학습 기록이자 포트폴리오다.

## 명령

```sh
npm run dev      # 개발 서버. 주소는 http://localhost:4321/Frontier-Lab/ (base 경로 포함)
npm run build    # 정적 빌드. frontmatter 가 스키마에 안 맞으면 여기서 실패한다
npm run check    # astro check (타입 검사)
```

## 구조

- `src/content/{radar,notes,lab}/` — 글. 스키마는 `src/content.config.ts`.
- `src/pages/` — 구역별 목록과 상세 페이지. `src/layouts/Base.astro` 가 공통 틀.
- `src/lib/content.ts` — 글 조회. 초안(`draft: true`)은 개발 서버에서만 보이도록 여기서 거른다.
- `templates/` — 새 글을 시작할 때 복사하는 양식. `experiments/` — Lab 글에 딸린 코드.
- `.github/workflows/deploy.yml` — `main` 에 푸시하면 GitHub Pages 로 배포.

## 지킬 것

- **내부 링크는 `src/lib/url.ts` 의 `href()` 를 거친다.** 사이트가 `/Frontier-Lab/` 아래에 배포되므로 `/radar/` 같은 절대 경로를 그대로 쓰면 깨진다.
- **Astro 는 7.x 다.** 기억에 의존하지 말고 https://docs.astro.build 나 `node_modules/astro` 의 타입을 확인한 뒤 쓴다.
- 글은 한국어로 쓴다. 본문은 "~한다" 체, 사이트 UI 문구는 "~합니다" 체.

## 글 내용에 대한 규칙

이 사이트의 가치는 운영자가 직접 해 본 기록이라는 데 있다.

- 하지 않은 실험, 나오지 않은 결과, 측정하지 않은 숫자를 쓰지 않는다.
- Radar 항목은 직접 열어 본 1차 출처가 있어야 한다. 확인 못 한 날짜는 비워 둔다.
- Radar 의 판정(`verdict`, `why`)과 Lab 의 "배운 점"은 운영자의 판단이다. 에이전트가 초안을 쓸 때는 판정을 비워 두고 `draft: true` 로 올려, 운영자가 읽고 채운 뒤 공개하게 한다.
- 에이전트가 초안을 쓴 글은 본문에 그 사실을 적는다.
- 운영자의 실명, 이메일, 로컬 경로 같은 개인 정보를 글이나 코드에 넣지 않는다. 공개 신원은 GitHub 계정 `hrtar0305` 뿐이다.
