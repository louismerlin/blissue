import { route } from 'preact-router';

const Reactions = ({ reactions, link, comments }) => (
	<a className="reactions" href={link}>
		<div className="reaction">
			👍&nbsp;&nbsp;{reactions['+1']}
		</div>
		<div className="reaction">
			👎&nbsp;&nbsp;{reactions['-1']}
		</div>
		<div className="reaction">
			😄&nbsp;&nbsp;{reactions.laugh}
		</div>
		<div className="reaction">
			🎉&nbsp;&nbsp;{reactions.hooray}
		</div>
		<div className="reaction">
			😕&nbsp;&nbsp;{reactions.confused}
		</div>
		<div className="reaction">
			❤️&nbsp;&nbsp;{reactions.heart}
		</div>
		<div className="reaction">
			💬&nbsp;&nbsp;{comments}
		</div>
	</a>
);

export default ({ postId, posts }) => {
	const post = posts.find(p => p.id === Number(postId));
	if (!post) {
		route('/', true);
	}
	else {
		return (
			<div>
				<h1 className="is-post-title">{post.title}</h1>
				<h4 class="is-post-date">{post.created_at.toDateString()}</h4>
				<post.body />
				<Reactions reactions={post.reactions} link={post.url} comments={post.comments} />
			</div>
		);
	}
};
