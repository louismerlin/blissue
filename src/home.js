export default ({ posts }) => (
  <div id='post-list'>
    {posts.map(post => (
      <div>
        <h2 className='post-title'>
          <a href={`/${post.id}`}>{post.title}</a>
        </h2>
        <h4 className='post-date'>{post.created_at.toDateString()}</h4>
      </div>
    ))}
  </div>
)
