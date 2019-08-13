/** @jsx h */
import { h, render, Fragment } from 'preact'
import { useState, useEffect } from 'preact/hooks'
import Router from 'preact-router'
import Home from './Home'
import Post from './Post'
import Footer from './Footer'
import reeq from 'reeq'
import { createHashHistory } from 'history'
import 'normalize.css'
import 'concrete.css'
import './style.css'

const USERNAME = 'louismerlin'
const BLOG_NAME = 'blissue'

function App () {
  const [posts, setPosts] = useState([])
  const [author, setAuthor] = useState({})

  useEffect(() => {
    const getPosts = async () => {
      let posts = await reeq(`https://api.github.com/repos/${USERNAME}/${BLOG_NAME}/issues?labels=post`, { headers: { Accept: '  application/vnd.github.squirrel-girl-preview' } })
      posts = posts.filter(p => p.author_association === 'OWNER')
      posts = posts.map(p => ({
        createdAt: new Date(p.created_at),
        ...p
      }))
      setPosts(posts)
    }
    getPosts()
  }, [])

  useEffect(() => {
    const getAuthor = async () => {
      const author = await reeq(`https://api.github.com/users/${USERNAME}`)
      setAuthor(author)
    }
    getAuthor()
  }, [])

  if (posts.length && author !== {} && author.login !== undefined) {
    return (
      <Fragment>
        <header>
          <a href='/'>
            <h1>
              {author.login + `'`}s blog
            </h1>
          </a>
        </header>
        <br />
        <main>
          <Router history={createHashHistory()}>
            <Home path='/' posts={posts} />
            <Post path='/:postId' posts={posts} />
          </Router>
          <hr />
          <Footer author={author} />
        </main>
      </Fragment>
    )
  } else {
    return <h1>Loading...</h1>
  }
}

render(<App />, document.body)
