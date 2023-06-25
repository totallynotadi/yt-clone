import ytdl from 'ytdl-core';

export async function load({ params }) {
	let id = params.id;

	let videoInfo = await ytdl.getInfo(`https://youtube.com/watch?v=${id}`);
	let format = ytdl.chooseFormat(videoInfo.formats, {
		quality: 'highestaudio',
		filter: 'audioandvideo'
	});

	return format;
}
