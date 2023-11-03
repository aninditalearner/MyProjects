const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  // Create a proxy for the OAuth token request
  app.use(
    "/wileyws/oauth/token",
    createProxyMiddleware({
      target: "https://uat.hybris.wiley.com",
      changeOrigin: true,
    })
  );

  // Create additional proxies for other API endpoints if needed
  // Example:
  app.use(
    "/wileyws/v4/wileyb2c/products",
    createProxyMiddleware({
      target: "https://uat.hybris.wiley.com",
      changeOrigin: true,
      secure: false,
    })
  );
};
