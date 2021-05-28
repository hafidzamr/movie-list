const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  assetPrefix: isProd ? 'https://unruffled-hawking-8f4248.netlify.app/' : '',
  target: 'serverless',
  images: {
    domains: ['image.tmdb.org']
  },
  future: {
    webpack5: true
  }
}
