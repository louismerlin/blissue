import { route } from 'preact-router';

export default ({ postId, posts, home }) => {
	const post = posts.find(p => p.id === Number(postId))
	if (!post) {
		route(home, true);
	} else {
		return (
			<div>
				<h1 className="is-post-title">{post.title}</h1>
				<h4 class="is-post-date">{post.created_at.toDateString()}</h4>
				<post.body/>
			</div>
		);
	}
};
