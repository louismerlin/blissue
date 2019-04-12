import { route } from 'preact-router'

const Reactions = ({ reactions, link, comments }) => (
  <a className='row reactions' href={link}>
    <div className='column'>
      👍&nbsp;&nbsp;{reactions['+1']}
    </div>
    <div className='column'>
      👎&nbsp;&nbsp;{reactions['-1']}
    </div>
    <div className='column'>
      😄&nbsp;&nbsp;{reactions.laugh}
    </div>
    <div className='column'>
      🎉&nbsp;&nbsp;{reactions.hooray}
    </div>
    <div className='column'>
      😕&nbsp;&nbsp;{reactions.confused}
    </div>
    <div className='column'>
      ❤️&nbsp;&nbsp;{reactions.heart}
    </div>
    <div className='column'>
      💬&nbsp;&nbsp;{comments}
    </div>
  </a>
)

export default ({ postId, posts }) => {
  const post = posts.find(p => p.id === Number(postId))
  if (!post) {
    route('/', true)
  } else {
    return (
      <div>
        <h2 className='post-title'>{post.title}</h2>
        <h4 class='post-date'>{post.created_at.toDateString()}</h4>
        <post.body />
        <Reactions reactions={post.reactions} link={post.url} comments={post.comments} />
      </div>
    )
  }
}
