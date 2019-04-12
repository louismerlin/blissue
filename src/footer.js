export default ({ author }) => (
  <div className='footer row'>
    <div className='column'>
      <h2 style='margin-bottom: 0'>{author.name}</h2>
      <a
        href={
          author.blog.startsWith('http://') || author.blog.startsWith('https://')
            ? author.blog
            : `http://${author.blog}`
        }
      >
        {author.blog}
      </a>
      <p>{author.bio}</p>
    </div>
    <div className='column'>
      <h3>GitHub: <a href={author.url}>{author.login}</a></h3>
      <p>📍&nbsp;&nbsp;{author.location}</p>
    </div>
  </div>
)
