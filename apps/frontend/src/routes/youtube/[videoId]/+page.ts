import type { Page } from '@sveltejs/kit';

export function load({ params }: Page) {
	console.log(params.videoId);

	return { videoId: params.videoId };
}
