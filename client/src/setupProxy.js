const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://server:3000',
      changeOrigin: true,
      pathRewrite: { '^/api': '/' },
    }),
  )
}
