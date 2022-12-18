const getURL = async (id) => {
	let data = await fetch(`https://spotify-endpoints.15adityagaikwad.repl.co/url/${id}`);
	data = await data.json();
	return data;
};
export async function load({ params }) {
	let data = await getURL(params.id);
	console.log(data);
	console.log(data.url);
	return data;
	// return { msg: `${params.id} from page.js` };
}
