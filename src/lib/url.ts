// 사이트가 /Frontier-Lab/ 아래에 배포되므로, 내부 링크는 반드시 이 함수를 거친다.
const base = import.meta.env.BASE_URL.replace(/\/+$/, '');

export function href(path = '/'): string {
	return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}
