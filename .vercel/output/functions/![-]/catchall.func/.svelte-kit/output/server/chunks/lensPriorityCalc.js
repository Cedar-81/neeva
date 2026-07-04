//#region src/lib/lensPriorityCalc.ts
var WEIGHT_TIME_CREATED = .4;
var WEIGHT_NUM_COMMENTS = .3;
var WEIGHT_NUM_LIKES = .2;
var WEIGHT_NUM_VIEWS = .1;
function calculatePostPriority(post, commentLen) {
	const current_time = Date.now();
	const post_likes = post.likes ? post.likes.length : 0;
	const post_views = post.views ? post.views : 0;
	const num_comments = commentLen;
	return WEIGHT_TIME_CREATED * (1 / ((current_time - new Date(post.created_at).getTime()) / (1e3 * 3600) + 2)) + WEIGHT_NUM_COMMENTS * num_comments + WEIGHT_NUM_LIKES * post_likes + WEIGHT_NUM_VIEWS * post_views;
}
//#endregion
export { calculatePostPriority as t };
