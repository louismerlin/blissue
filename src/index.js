import './style';
import { Component } from 'preact';
import { req } from './utils';

export default class App extends Component {
	state = {
		posts: [],
		author: ''
	}
	componentDidMount() {
		req(`https://api.github.com/repos/louismerlin/blissue/issues`).then(issues => {
			console.log(issues)
			this.setState({
				posts: issues.filter(i => i.author_association === 'OWNER').map(i => ({body: i.body})),
				author: issues.find(i => i.author_association === 'OWNER').user.login
			});
		});
	}

	render(_, { posts, author }) {
		return (
			<div>
				<h1>Welcome to the blog of {author} !</h1>
				{posts.map(post => (
					<p>{post.body}</p>
				))}
			</div>
		);
	}
}
