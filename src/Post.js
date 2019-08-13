/** @jsx h */
import { h, Fragment } from 'preact'
import { route } from 'preact-router'
import Markup from 'preact-markup'
import marked from 'marked'

function Reactions ({ reactions, link, comments }) {
  return (
    <a class='no-decoration' href={link}>
      <div class='reactions'>
        <div className='row mobile'>
          <div className='column'>
            👍&nbsp;&nbsp;{reactions['+1']}
          </div>
          <div className='column'>
            👎&nbsp;&nbsp;{reactions['-1']}
          </div>
          <div className='column'>
            😄&nbsp;&nbsp;{reactions.laugh}
          </div>
        </div>
        <div className='row mobile'>
          <div className='column'>
            🎉&nbsp;&nbsp;{reactions.hooray}
          </div>
          <div className='column'>
            😕&nbsp;&nbsp;{reactions.confused}
          </div>
          <div className='column'>
            ❤️&nbsp;&nbsp;{reactions.heart}
          </div>
        </div>
        <div className='row mobile'>
          <div className='column'>
            🚀&nbsp;&nbsp;{reactions.rocket}
          </div>
          <div className='column'>
            👀&nbsp;&nbsp;{reactions.eyes}
          </div>
          <div className='column'>
            💬&nbsp;&nbsp;{comments}
          </div>
        </div>
      </div>
    </a>
  )
}

function Post ({ postId, posts }) {
  const post = posts.find(p => p.id === Number(postId))

  if (!post) {
    route('/', true)
  } else {
    return (
      <Fragment>
        <h1 class='post-title'>
          {post.title}
        </h1>
        <h4 class='post-date'>
          {post.createdAt.toDateString()}
        </h4>
        <Markup markup={marked(post.body)} />
        <Reactions reactions={post.reactions} link={post.html_url} comments={post.comments} />
      </Fragment>
    )
  }
}

export default Post
