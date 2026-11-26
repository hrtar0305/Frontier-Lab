// frontmatter 의 날짜(2026-11-26)는 UTC 자정으로 읽히므로, UTC 기준으로 꺼내야 하루가 밀리지 않는다.
const pad = (n: number) => String(n).padStart(2, '0');

export function formatDate(date: Date): string {
	return `${date.getUTCFullYear()}.${pad(date.getUTCMonth() + 1)}.${pad(date.getUTCDate())}`;
}

export function isoDate(date: Date): string {
	return date.toISOString().slice(0, 10);
}
