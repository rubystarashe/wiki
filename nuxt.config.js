const pkg = require('./package')
const { routes } = require('./src/db')

module.exports = {
  mode: 'universal',
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: '#fff' },
  css: [
  ],
  plugins: [

  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/markdownit'
  ],
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    injected: true
  },
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  build: {
    extend(config, ctx) {
      config.node = {
        fs: 'empty'
      }
    }
  },
  generate: {
    routes
  },
  router: {
    base: '/wiki/'
  }
}
