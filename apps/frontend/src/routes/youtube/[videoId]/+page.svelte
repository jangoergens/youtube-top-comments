<script lang="ts">
	import { page } from '$app/stores';

	const videoId = $page.params.videoId;
</script>

<div>
	<iframe
		width="560"
		height="315"
		src={'https://www.youtube.com/embed/' + videoId}
		title="YouTube video player"
		frameborder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
		allowfullscreen
	/>
</div>

<style>
	div {
		display: flex;
		justify-content: center;
	}
</style>
