export default ({ posts }) => (
	<div id="post-list">
		{posts.map(post => (
			<div className="post-in-list">
				<h3>{post.title}</h3>
				<p>{post.body}</p>
			</div>
		))}
	</div>
);
