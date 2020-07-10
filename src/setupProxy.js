const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(('/api', createProxyMiddleware({
    target: 'http://106.54.207.247:8086/',
    changeOrigin: true,
    pathRewrite: {
      '^/api': ''
    }
  })));

  app.use(('/other', createProxyMiddleware({
    target: 'http://localhost:8081/',
    changeOrigin: true,
    pathRewrite: {
      '^/other': ''
    }
  })));
}
