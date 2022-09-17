<script lang="ts">
	import { goto } from '$app/navigation';

	let videoURL = '';

	const handleSubmit = () => {
		const url = new URL(videoURL);
		const videoId = url.searchParams.getAll('v');
		goto(`/youtube/${videoId}`);
	};
</script>

<svelte:head>
	<title>Youtube Video Selector</title>
	<meta name="description" content="Youtube Video Selection" />
</svelte:head>

<div class="content">
	<h1>Youtube Video Selector</h1>
	<p>You can submit the link to a youtube video of which you want to see the top comments.</p>
	<h2>Selection</h2>
	<form on:submit|preventDefault={handleSubmit}>
		<input type="text" bind:value={videoURL} />
		<button type="submit">Search</button>
	</form>
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
