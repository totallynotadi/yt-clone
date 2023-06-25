// import YTMusic from 'ytmusic-api';
import ytdl from 'ytdl-core';
import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
	let id = url.searchParams.get('id');

	let videoInfo = await ytdl.getInfo(`https://youtube.com/watch?v=${id}`);

	return new json(videoInfo);
}
