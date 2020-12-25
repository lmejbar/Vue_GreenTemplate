export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  router:{
    base: '/Vue_GreenTemplate/'
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'crypjt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: "https://fonts.googleapis.com/css?family=Open+Sans" },
      { rel : "stylesheet", href : "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" },
      {  rel : "stylesheet", href : "https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css"},
      { rel:"stylesheet", href:"https://mdbcdn.b-cdn.net/wp-content/themes/mdbootstrap4/css/compiled-4.16.0.min.css?ver=4.16.0", type:"text/css"},
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'}
    ]
  },

  //Customize the progress-bar color
  loading: { color: '#3B8070' },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@plugins/vuetify'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/axios'
  ],
  axios: {
    baseURL: 'https://finance.yahoo.com/quote/'
  },


  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

}
