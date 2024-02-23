const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://223.130.131.203:8080',
      changeOrigin: true,
    })
  );
};
