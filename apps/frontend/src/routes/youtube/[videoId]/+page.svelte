<script lang="ts">
	import { page } from '$app/stores';
	import type { TopLevelCommentInfo } from './page';

	const videoId = $page.params.videoId;
	const fetchComments = async (): Promise<TopLevelCommentInfo[]> => {
		const response = await fetch(`/api/comments/${videoId}`);
		return await response.json();
	};
</script>

<div>
	<h2>Selected Video</h2>
	<iframe
		width="560"
		height="315"
		src={'https://www.youtube.com/embed/' + videoId}
		title="YouTube video player"
		frameborder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
		allowfullscreen
	/>
	{#await fetchComments()}
		<p>...loading comments</p>
	{:then comments}
		<h3>{comments.length} comments found</h3>
		<ol>
			{#each comments as comment}
				<li>{comment.textDisplay}</li>
			{/each}
		</ol>
	{:catch error}
		<p>An error occurred!</p>
		<p>{error.message}</p>
	{/await}
</div>

<style>
	div {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	h2 {
		font-size: 1.6rem;
	}
</style>
