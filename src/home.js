export default ({ posts }) => (
	<div id="post-list">
		{posts.map(post => (
			<div className="post-in-list">
				<h1 className="is-post-title">{post.title}</h1>
				<post.body />
			</div>
		))}
	</div>
);
