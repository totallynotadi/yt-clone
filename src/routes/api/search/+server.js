import pkg from 'youtubei.js';
const { Innertube } = pkg;
import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
	let query = url.searchParams.get('query');

	const youtube = await Innertube.create();
	let data = await youtube.search(query);
	// console.dir(
	// 	data.results.forEach((result) => {
	// 		if (result.type == 'Video') {
	// 			console.log(result.title.text);
	// 		}
	// 	})
	// );
	data = data.results.filter((result) => result.type == 'Video');

	return new json(data);
}
