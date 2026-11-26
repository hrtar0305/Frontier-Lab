import { getCollection, type CollectionEntry } from 'astro:content';
import { SECTIONS, type SectionKey } from '../consts';

// 초안은 개발 서버에서만 보인다.
const visible = ({ data }: { data: { draft: boolean } }) =>
	import.meta.env.PROD ? !data.draft : true;

export async function getRadar(): Promise<CollectionEntry<'radar'>[]> {
	const entries = await getCollection('radar', visible);
	return entries.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export const noteDate = (note: CollectionEntry<'notes'>) => note.data.updated ?? note.data.created;

export async function getNotes(): Promise<CollectionEntry<'notes'>[]> {
	const entries = await getCollection('notes', visible);
	return entries.sort((a, b) => noteDate(b).valueOf() - noteDate(a).valueOf());
}

export async function getLab(): Promise<CollectionEntry<'lab'>[]> {
	const entries = await getCollection('lab', visible);
	return entries.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export interface FeedItem {
	section: SectionKey;
	path: string;
	title: string;
	description: string;
	date: Date;
	draft: boolean;
}

// 홈의 "최근 글": 세 구역을 날짜순으로 한 줄에 세운다.
export async function getFeed(): Promise<FeedItem[]> {
	const [radar, notes, lab] = await Promise.all([getRadar(), getNotes(), getLab()]);
	const item = (
		section: SectionKey,
		id: string,
		data: { title: string; description: string; draft: boolean },
		date: Date,
	): FeedItem => ({
		section,
		path: `${SECTIONS[section].path}${id}/`,
		title: data.title,
		description: data.description,
		date,
		draft: data.draft,
	});
	return [
		...radar.map((e) => item('radar', e.id, e.data, e.data.date)),
		...notes.map((e) => item('notes', e.id, e.data, noteDate(e))),
		...lab.map((e) => item('lab', e.id, e.data, e.data.date)),
	].sort((a, b) => b.date.valueOf() - a.date.valueOf());
}
