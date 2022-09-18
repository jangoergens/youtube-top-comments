export interface TopLevelCommentInfo {
	videoId: string;
	textDisplay: string;
	textOriginal: string;
	authorDisplayName: string;
	authorProfileImageUrl: string;
	authorChannelUrl: string;
	authorChannelId: {
		value: string;
	};
	canRate: boolean;
	viewerRating: string;
	likeCount: number;
	publishedAt: Date;
	updatedAt: Date;
}

export interface TopLevelComment {
	kind: string;
	etag: string;
	id: string;
	snippet: TopLevelCommentInfo;
}

export interface Snippet {
	videoId: string;
	topLevelComment: TopLevelComment;
	canReply: boolean;
	totalReplyCount: number;
	isPublic: boolean;
}

export interface Item {
	kind: string;
	etag: string;
	id: string;
	snippet: Snippet;
}

export interface YoutubeCommentThreads {
	kind: string;
	etag: string;
	nextPageToken: string;
	pageInfo: {
		totalResults: number;
		resultsPerPage: number;
	};
	items: Item[];
}
