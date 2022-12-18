// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
// export const prerender = true;

// import { Innertube } from 'youtubei.js';

export async function load({ params }) {
	// console.log('running');

	// const youtube = await Innertube.create();
	// let data = await youtube.search('sewerslvt');
	// console.dir(
	// 	data.results.forEach((result) => {
	// 		if (result.type == 'Video') {
	// 			console.log(result.title.text);
	// 		}
	// 	})
	// );
	// console.log('ran');
	return { msg: 'lmao', passedParams: params };
}

// AIzaSyCq47Zxsu4pN1MMWBNa04380TGDxT7hrQM
