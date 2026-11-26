// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages 프로젝트 사이트: https://hrtar0305.github.io/Frontier-Lab/
// 커스텀 도메인을 붙이면 site 를 바꾸고 base 를 지운다.
export default defineConfig({
	site: 'https://hrtar0305.github.io',
	base: '/Frontier-Lab',
	trailingSlash: 'always',
	markdown: {
		shikiConfig: {
			// 라이트/다크 전환은 src/styles/global.css 의 .astro-code 규칙이 처리한다.
			themes: { light: 'github-light', dark: 'github-dark' },
		},
	},
});
