module.exports = {
  target: 'serverless',
  images: {
    domains: ['image.tmdb.org']
  },
  trailingSlash: true,
  future: {
    webpack5: true
  }
}
