export const SITE_TITLE = 'Frontier-Lab';
export const SITE_TAGLINE = '읽은 것을 직접 돌려 보고, 결과를 남깁니다';
export const SITE_DESCRIPTION =
	'AI 최신 기술 트렌드를 추적하고, 직접 써 보고 실험한 결과를 쌓아 가는 학습 사이트';

export const AUTHOR = 'hrtar0305';
export const GITHUB_URL = 'https://github.com/hrtar0305';
export const REPO_URL = 'https://github.com/hrtar0305/Frontier-Lab';

export type SectionKey = 'radar' | 'notes' | 'lab';

// step: 세 구역이 이어지는 흐름에서 각 구역이 맡는 일
export const SECTIONS: Record<
	SectionKey,
	{ label: string; step: string; path: string; blurb: string }
> = {
	radar: {
		label: 'Radar',
		step: '고른다',
		path: '/radar/',
		blurb: '새로 나온 모델·논문·도구를 짧게 정리하고, 써 볼지 판정합니다.',
	},
	notes: {
		label: 'Notes',
		step: '이해한다',
		path: '/notes/',
		blurb: '개념을 내 말로 정리합니다. 한 번 쓰고 끝내지 않고 계속 고칩니다.',
	},
	lab: {
		label: 'Lab',
		step: '확인한다',
		path: '/lab/',
		blurb: '직접 써 본 기록입니다. 질문, 환경, 과정, 결과, 배운 점을 남깁니다.',
	},
};

export const SECTION_ORDER: SectionKey[] = ['radar', 'notes', 'lab'];

export const KIND_LABEL = { model: '모델', tool: '도구', paper: '논문', other: '기타' } as const;
export const VERDICT_LABEL = { try: '써 본다', watch: '지켜본다', skip: '넘긴다' } as const;
export const VERDICT_PENDING = '판정 전';
export const STATUS_LABEL = {
	planned: '예정',
	running: '진행 중',
	done: '완료',
	failed: '실패',
} as const;
