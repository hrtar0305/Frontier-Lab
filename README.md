# Frontier-Lab

AI 최신 기술 트렌드를 추적하고, 직접 써 보고 실험한 결과를 쌓아 가는 학습 사이트.

**사이트:** https://hrtar0305.github.io/Frontier-Lab/

## 구성

| 구역 | 담는 것 | 위치 |
| --- | --- | --- |
| Radar | 새로 나온 모델·논문·도구와 "써 볼 것인가" 판정 | `src/content/radar/` |
| Notes | 개념을 내 말로 정리한 글 | `src/content/notes/` |
| Lab | 직접 써 본 실험 기록 | `src/content/lab/` |

실험 코드는 `experiments/` 에 둡니다. 운영 방식은 사이트의 [이 사이트를 운영하는 방식](https://hrtar0305.github.io/Frontier-Lab/notes/how-this-site-works/) 에 적혀 있습니다.

## 글 쓰기

1. `templates/` 에서 구역에 맞는 파일을 해당 `src/content/<구역>/` 폴더로 복사합니다.
   - Radar: `<발행일>.md` (예: `2026-12-03.md`)
   - Notes: `<영문-슬러그>.md`
   - Lab: `<날짜>-<영문-슬러그>.md`
2. frontmatter 와 본문을 채웁니다. 항목의 뜻은 `src/content.config.ts` 에 주석으로 적혀 있습니다.
3. `draft: true` 인 글은 로컬에서만 보입니다. 공개하려면 그 줄을 지웁니다.
4. `main` 에 푸시하면 GitHub Actions 가 빌드해서 배포합니다.

## 로컬에서 보기

Node.js 22.23.4 이상이 필요합니다.

```sh
npm install
npm run dev      # http://localhost:4321/Frontier-Lab/
npm run build    # dist/ 에 정적 파일 생성
npm run check    # 타입과 frontmatter 검사
```

## 기술

[Astro](https://astro.build) 로 만든 정적 사이트이고 GitHub Pages 에 배포합니다.
