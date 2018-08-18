export default ({ author }) => (
	<div className="footer">
		<div className="is-half">
			<h2 style="margin-bottom: 0">{author.name}</h2>
			<h3 style="color: grey; margin-top: 0"><a href={author.url}>{author.login}</a></h3>
			<p>📍&nbsp;&nbsp;{author.location}</p>
		</div>
		<div className="is-half">
			<p style="color: grey">{author.bio}</p>
			<a
				href={
					author.blog.startsWith('http://') || author.blog.startsWith('https://') ?
						author.blog :
						`http://${author.blog}`
				}
			>
				{author.blog}
			</a>
		</div>
	</div>
);
