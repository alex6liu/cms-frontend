module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {
  },
  weapp: {},
  h5: {
    router: {
      mode: 'browser',
      basename: '/',
      customRoutes: {
        '/pages/index/index': '/',
        '/pages/signup/signup': '/signup',
        '/pages/welcome/welcome': '/welcome',
      }
    }
  }
}
