import './style';
import { Component } from 'preact';
import { Router } from 'preact-router';
import Home from './home';
import Post from './post';
import { req } from './utils';

const USERNAME = 'louismerlin';
const BLOG_NAME = 'blissue';

export default class App extends Component {
	state = {
		posts: [],
		author: ''
	}
	componentDidMount() {
		req(`https://api.github.com/repos/${USERNAME}/${BLOG_NAME}/issues`).then(issues => {
			this.setState({
				posts: issues.filter(i => i.author_association === 'OWNER').map(i => ({
					id: i.id,
					body: i.body,
					title: i.title
				})),
				author: issues.find(i => i.author_association === 'OWNER').user.login
			});
		});
	}

	render(_, { posts, author }) {
		return (
			<div>
				<h1>{author + `'`}s blog</h1>
				<Router>
					<Home path={`/${BLOG_NAME}`} posts={posts} />
					<Post path={`/${BLOG_NAME}/:post`} posts={posts} />
				</Router>
			</div>
		);
	}
}
