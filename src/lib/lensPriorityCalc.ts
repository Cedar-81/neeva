// Constants for weighting factors
const WEIGHT_TIME_CREATED = 0.4;
const WEIGHT_NUM_COMMENTS = 0.3;
const WEIGHT_NUM_LIKES = 0.2;
const WEIGHT_NUM_VIEWS = 0.1;

interface Lens {
	author_id: string | null;
	content: string;
	created_at: string;
	genre: string;
	id: string;
	likes: string[] | null;
	summary: string;
	title: string;
	views: number | null;
}

// Function to calculate the priority score for a single post
export default function calculatePostPriority(post: Lens, commentLen: number) {
	// Get the current time
	const current_time = Date.now();
	const post_likes = post.likes ? post.likes.length : 0;
	const post_views = post.views ? post.views : 0;
	const num_comments = commentLen;

	// Calculate the age of the post in hours
	const post_age_hours = (current_time - new Date(post.created_at).getTime()) / (1000 * 3600);

	// Calculate the priority score for the post
	const priority_score =
		WEIGHT_TIME_CREATED * (1 / (post_age_hours + 2)) + // Add 2 to prevent division by zero
		WEIGHT_NUM_COMMENTS * num_comments +
		WEIGHT_NUM_LIKES * post_likes +
		WEIGHT_NUM_VIEWS * post_views;

	return priority_score;
}
