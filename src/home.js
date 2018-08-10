export default ({ posts }) => (
	<div id="post-list">
		{posts.map(post => (
			<div className="post-in-list">
				<h3>{post.title}</h3>
				<post.body/>
			</div>
		))}
	</div>
);
