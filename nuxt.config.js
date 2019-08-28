import pkg from './package'
const webpack = require("webpack");
const env = require('dotenv').config();
export default {
  mode: 'universal',
    debug: true,
    env:env.parsed,
  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],

    link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:300,400,400i,700,700i,900' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:400,400i,600,600i,700,700i,800,800i,900,900i' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i' }
    ],

    /*script: [
        {
            src: "/js/jquery.min.js",
            type: "text/javascript"
        },
        {
            src:"/js/popper.min.js",
            type: "text/javascript"
        },
        {
            src:"/js/bootstrap.min.js",
            type: "text/javascript"
        }
    ]*/
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
      '~assets/css/bootstrap.css','~assets/css/style.css','~assets/css/slicknav.css','~assets/css/custom.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
      '~/plugins/i18n.js',
      { src: '~plugins/bootstrap.js' },
      { src: '~/plugins/after-each', mode: 'client' },
      { src: '~/plugins/slicknav.js',ssr:false},
      { src: '~/plugins/custom.js',ssr:false },
      { src: '~/plugins/owl.carousel', ssr: false},
      { src: '~/plugins/vue-lazyload', ssr: false },
      { src: '~/plugins/infiniteloading', ssr: false },
      { src: '~/plugins/axios', ssr: false },
      { src: '~/plugins/vuejs-paginate', ssr: false },
      { src:'~plugins/vue-scrollto.js',ssr:false}
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
      "nuxt-svg"
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
      baseURL: process.env.BASE_URL,
      credentials: false
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
      //publicPath: '/apstrofi/',
      plugins: [
          new webpack.ProvidePlugin({
              $: 'jquery',
              jQuery: 'jquery',
              'window.jQuery': 'jquery'
          })
      ],
      extend(config, options) {
        return Object.assign({}, config, {
          devtool: 'source-map'
        })
      }
  },
    router: {              // customize nuxt.js router (vue-router).
        middleware: 'i18n',   // middleware all pages of the application
        base: process.env.ROUTER_BASE,
        linkActiveClass: 'active'
    },
    transaction:{
        name:'fade',
        mode:'out-in'
    },
    render: {
        bundleRenderer: {
            shouldPreload: (file, type) => {
                return ['script', 'style', 'font'].includes(type)
            }
        }
    }
}
