import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// 세 구역이 공통으로 갖는 항목. draft: true 인 글은 로컬 개발 서버에서만 보이고 배포에서는 빠진다.
const common = {
	title: z.string(),
	description: z.string(),
	tags: z.array(z.string()).default([]),
	draft: z.boolean().default(false),
};

// Radar: 한 편 = 한 기간의 묶음. 항목은 구조화해서 적는다(판정 집계, 이후 자동화에 쓰기 위해).
const radar = defineCollection({
	loader: glob({ base: './src/content/radar', pattern: '**/*.md' }),
	schema: z.object({
		...common,
		date: z.coerce.date(),
		period: z.object({ from: z.coerce.date(), to: z.coerce.date() }),
		items: z
			.array(
				z.object({
					name: z.string(),
					kind: z.enum(['model', 'tool', 'paper', 'other']),
					date: z.coerce.date().optional(),
					url: z.url(),
					summary: z.string(),
					// 써 볼 것인가. 비워 두면 "판정 전"으로 표시된다.
					verdict: z.enum(['try', 'watch', 'skip']).optional(),
					why: z.string().optional(),
					// 이 항목을 실제로 써 본 Lab 글의 id (파일명에서 .md 를 뺀 것)
					lab: z.string().optional(),
				}),
			)
			.default([]),
	}),
});

// Notes: 계속 고쳐 쓰는 글. created 는 처음 쓴 날, updated 는 마지막으로 고친 날.
const notes = defineCollection({
	loader: glob({ base: './src/content/notes', pattern: '**/*.md' }),
	schema: z.object({
		...common,
		created: z.coerce.date(),
		updated: z.coerce.date().optional(),
	}),
});

// Lab: 직접 해 본 실험 기록.
const lab = defineCollection({
	loader: glob({ base: './src/content/lab', pattern: '**/*.md' }),
	schema: z.object({
		...common,
		date: z.coerce.date(),
		status: z.enum(['planned', 'running', 'done', 'failed']).default('done'),
		// 이 실험으로 답하려는 질문 한 줄
		question: z.string(),
		// 결과 한 줄. 끝나기 전에는 비워 둔다.
		takeaway: z.string().optional(),
		// 사용한 도구와 버전. AI 글은 빨리 낡으므로 버전을 꼭 적는다.
		env: z.array(z.string()).default([]),
		// 리포지토리 안의 코드 경로. 예: experiments/2026-11-26-something
		code: z.string().optional(),
	}),
});

export const collections = { radar, notes, lab };
