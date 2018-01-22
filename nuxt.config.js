
module.exports = {
  /* Headers of the page */
  head: {
    title: 'vuex-todo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Vuex Todo App' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  },
  plugins: ['~/plugins/ElementUI.js'],
  css: [
    'node_modules/element-ui/lib/theme-chalk/index.css'
  ],
  /* Customize the progress bar color */
  loading: { color: '#3B8070' },
  /* Build configuration */
  build: {
    vendor: [
      '~/plugins/ElementUI.js'
    ],
    extractCSS: true,
    /* Run ESLint on save */
    extend (config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  render: {
    http2: { push: true }
  }
}
