/** @jsx h */
import { h } from 'preact'

function Footer ({ author }) {
  return (
    <footer class="footer">
        <h2 style={{ margin: 0 }}>{author.name}</h2>
        {author.blog && (
          <a
            href={
              author.blog.startsWith('http://') || author.blog.startsWith('https://')
                ? author.blog
                : `http://${author.blog}`
            }
          >
            {author.blog}
          </a>
        )}
        <p>{author.bio}</p>
        <h4>GitHub: <a href={author.html_url}>{author.login}</a></h4>
        <p>📍&nbsp;&nbsp;{author.location}</p>
        <a href='https://github.com/louismerlin/blissue'><small>blog built with blissue v.{process.env.npm_package_version}</small></a>
    </footer>
  )
}

export default Footer
