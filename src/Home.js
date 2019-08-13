/** @jsx h */
import { h, Fragment } from 'preact'
import { Link } from 'preact-router'

function Home ({ posts }) {
  return posts.map(post => (
    <Fragment>
      <Link href={`/${post.id}`}>
        <h2 class='post-title'>
          {post.title}
        </h2>
      </Link>
      <h5 class='post-date'>
        {post.createdAt.toDateString()}
      </h5>
      <br />
    </Fragment>
  ))
}

export default Home
