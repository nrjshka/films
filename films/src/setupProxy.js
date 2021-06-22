const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:3000', // change to env param
      changeOrigin: true,
      pathRewrite: { '^/api': '/' },
    }),
  )
}
