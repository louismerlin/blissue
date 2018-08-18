import './style';
import { Component } from 'preact';
import { Router } from 'preact-router';
import Home from './home';
import Post from './post';
import { req, ga } from './utils';
import Markdown from 'preact-markdown';

const USERNAME = 'louismerlin';
const BLOG_NAME = 'blissue';

export default class App extends Component {
	state = {
		posts: [],
		author: ''
	}
	componentDidMount() {
		ga();
		req(
			`https://api.github.com/repos/${USERNAME}/${BLOG_NAME}/issues?labels=post`,
			{
				Accept: 'application/vnd.github.squirrel-girl-preview'
			}
		).then(issues => {
			this.setState({
				posts: issues.filter(i => (
					i.author_association === 'OWNER'
				)).map(i => ({
					id: i.id,
					body: () => (<Markdown markdown={i.body} />),
					title: i.title,
					created_at: new Date(i.created_at),
					reactions: i.reactions,
					url: i.html_url,
					comments: i.comments
				})),
				author: issues.find(i => i.author_association === 'OWNER').user.login
			});
		});
	}

	render(_, { posts, author }) {
		const homeRoute = `/${BLOG_NAME}`;
		if (posts.length) {
			return (
				<div>
					<script async src="https://www.googletagmanager.com/gtag/js?id=UA-105326072-5" />
					<h1 className="has-text-centered is-blog-title">
						<a href={homeRoute}>{author + `'`}s blog</a>
					</h1>
					<main>
						<Router>
							<Home path={homeRoute} posts={posts} />
							<Post path={`/${BLOG_NAME}/:postId`} home={homeRoute} posts={posts} />
						</Router>
					</main>
				</div>
			);
		}
		return (<div><h1 className="has-text-centered is-blog-title">LOADING....</h1></div>);
	}
}
