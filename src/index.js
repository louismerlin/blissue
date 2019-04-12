import { Component } from 'preact'
import { Router } from 'preact-router'
import Home from './home'
import Post from './post'
import Footer from './footer'
import { req, ga } from './utils'
import Markdown from 'preact-markdown'
import { createHashHistory } from 'history'
import 'normalize.css'
import 'concrete.css'
import './style'

const USERNAME = 'louismerlin'
const BLOG_NAME = 'blissue'

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      posts: [],
      author: {}
    }
  }
  componentDidMount () {
    ga()
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
        }))
      })
    })
    req(`https://api.github.com/users/${USERNAME}`).then(user => {
      this.setState({
        author: {
          login: user.login,
          url: user.html_url,
          name: user.name || '',
          blog: user.blog || '',
          location: user.location || '',
          bio: user.bio || ''
        }
      })
    })
  }

  render (_, { posts, author }) {
    if (posts.length && author !== {}) {
      return (
        <div>
          <link href='https://fonts.googleapis.com/css?family=Chivo:400,700' rel='stylesheet' />
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-105326072-5" />
          <header className='container blog-title'>
            <h1>
              <a href='/'>{author.login + `'`}s blog</a>
            </h1>
          </header>
          <main className='container'>
            <Router history={createHashHistory()}>
              <Home path='/' posts={posts} />
              <Post path='/:postId' posts={posts} />
            </Router>
            <Footer author={author} />
          </main>
        </div>
      )
    }
    return (<div className='container blog-title'><h1>LOADING....</h1></div>)
  }
}
