<script>
	import VideoCard from '$lib/VideoCard.svelte';

	let query = '';
	$: searchResults = [];

	const getSearchResults = async (query) => {
		// let data = await fetch(`https://spotify-endpoints.15adityagaikwad.repl.co/search/${query}`);
		let data = await fetch(`/api/search?query=${query}`);
		data = await data.json();
		searchResults = data;
		console.log(searchResults);
		// return data;
	};

	const searchCallback = () => {
		console.log(query);
		let data = getSearchResults(query);
		searchResults = data;
	};
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="fluid-column">
	<input
		type="text"
		name="search-bar"
		id="search-bar"
		placeholder="Search"
		bind:value={query}
		on:change={searchCallback}
	/>

	{#if searchResults.length > 0}
		{#each searchResults as result}
			<a href="/watch/{result.id}" style:width="90%">
				<VideoCard videoData={result} />
			</a>
		{/each}
	{:else}
		<div class="empty-call">
			<center>
				<img
					class="filler-image"
					src="https://cdn.dribbble.com/users/760295/screenshots/4433975/media/03494b209a1511a61868ced337b97931.png?compress=1&resize=400x300"
					alt=""
				/>
			</center>
		</div>
	{/if}

	<!-- <h1>
		<span class="welcome">
			<picture>
				<source srcset={welcome} type="image/webp" />
				<img src={welcome_fallback} alt="Welcome" />
			</picture>
		</span>

		to your new<br />SvelteKit app
	</h1>

	<h2>
		try editing <strong>src/routes/+page.svelte</strong>
	</h2>

	<Counter /> -->
</section>

<style>
	input {
		all: unset;
	}
	section {
		display: flex;
		flex-direction: column;
		/* justify-content: center; */
		align-items: center;
		/* flex: 0.6; */
	}
	#search-bar {
		margin-top: 2rem;
		margin-bottom: 2rem;
		width: 80%;
		outline: 1px solid rgb(117, 117, 117);
		padding: 1.2rem 1.2rem 1.2rem 3rem;
		border-radius: 4rem;
		transition: all 0.14s ease-in-out;
	}
	#search-bar:focus {
		box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
	}
	.filler-image {
		filter: grayscale() brightness(0.88);
	}
	/* .margin-top-2 {
		margin-top: 2rem;
	} */
	/* h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	} */
</style>
