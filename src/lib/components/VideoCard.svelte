<script>
	export let videoData = {};

	// let formatter = Intl.NumberFormat('en', { notation: 'compact' });
	// Number.prototype.toMMSS = function () {
	// 	// var sec_num = parseInt(this, 10); // don't forget the second param
	// 	var hours = Math.floor(this / 3600);
	// 	var minutes = Math.floor((this - hours * 3600) / 60);
	// 	var seconds = this - hours * 3600 - minutes * 60;
	// 	if (hours < 10) {
	// 		hours = '0' + hours;
	// 	}
	// 	if (minutes < 10) {
	// 		minutes = '0' + minutes;
	// 	}
	// 	if (seconds < 10) {
	// 		seconds = '0' + seconds;
	// 	}
	// 	return minutes + ':' + seconds;
	// };
</script>

<div class="video-card">
	<div class="fluid-row gap">
		<img src={videoData.thumbnails[0].url} alt="" />
		<div class="fluid-column justify-between">
			<div>
				<div class="video-title">
					{videoData.title.text}
				</div>
				<div class="row gap" style="margin-top:4px">
					<div class="views-count">
						{videoData.short_view_count.text}
					</div>
					<div class="timestamp-card">
						<center>
							{videoData.duration.text}
						</center>
					</div>
				</div>
			</div>
			<div class="channel-title">
				{videoData.author.name}
			</div>
			{#if videoData.description_snippet}
				<div class="description">
					{@html videoData.description_snippet}
				</div>
			{/if}
		</div>
	</div>
</div>

<style>
	img {
		aspect-ratio: 9 / 16;
		/* width: 458px; */
		width: 400px;
		object-fit: cover;
		object-position: center;
		border-radius: 1rem;
	}
	.video-card {
		width: 100%;
		height: 16rem;
		transition: all 0.2s ease-in-out;
		padding: 1rem;
		border-radius: 1.5rem;
		outline: 1px solid transparent;
	}
	.video-card:hover {
		background-color: rgb(213, 213, 213);
		outline: 1px solid rgb(194, 194, 194);
	}
	.views-count {
		color: grey;
		font-weight: 500;
		margin-top: 2px;
	}
	.video-title {
		margin-top: 10px;
		margin-bottom: 6px;
		font-size: 18px;
		font-weight: 600;
	}
	.timestamp-card {
		font-size: 12px;
		height: max-content;
		padding: 4px 6px;
		outline: 1px solid rgb(125, 125, 125);
		border-radius: 4px;
	}
	.description {
		margin-bottom: 1rem;
		color: grey;
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		text-overflow: ellipsis;
	}
	.channel-title {
		font-weight: 16px;
		color: grey;
		font-weight: 600;
		margin-top: 2px;
	}
</style>
