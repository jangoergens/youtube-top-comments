<script lang="ts">
	import type { RouteParams } from '.svelte-kit/types/src/routes/youtube/[videoId]/$types';

	export let data: RouteParams;
</script>

<div>
	<iframe
		width="560"
		height="315"
		src={'https://www.youtube.com/embed/' + data.videoId}
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
