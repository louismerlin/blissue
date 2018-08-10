export default function (config, env, helpers) {
    const BASE_URL = env.production ? ('/' + process.env.BLOG_NAME) : '/'
    config.output.publicPath = BASE_URL
}
