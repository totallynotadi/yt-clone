<script>
	export let data;
</script>

<div>
	<video src={data.url} controls="true" autoplay="true" width="100%">
		<track kind="captions" />
	</video>
	<!-- {data.url} -->
</div>

<style>
	video {
		margin-top: 3rem;
		aspect-ratio: 16 / 9;
		width: 100%;
		border-radius: 1rem;
		background-color: rgb(203, 204, 206);
	}
</style>
