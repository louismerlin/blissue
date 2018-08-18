export default ({ posts, path }) => (
	<div id="post-list">
		{posts.map(post => (
			<div className="post-in-list">
				<h1 className="is-post-title">
					<a href={`${path}/${post.id}`}>{post.title}</a>
				</h1>
				<h4 class="is-post-date">{post.created_at.toDateString()}</h4>
			</div>
		))}
	</div>
);
