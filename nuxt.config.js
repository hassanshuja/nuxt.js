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
        { rel: 'stylesheet', href: 'http://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/css/toastr.min.css' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:400,400i,600,600i,700,700i,800,800i,900,900i' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i' }
    ],

    script: [
      {
            src: "https://api.midtrans.com/v2/assets/js/midtrans-new-3ds.min.js",
            type: "text/javascript",
            body: true,
            id: "midtrans-script",
            'data-environment':"sandbox",
            'data-client-key':"VT-client-kev115vEOPOwkRiV"
        },
        {
          src: "https://app.sandbox.midtrans.com/snap/snap.js",
          type: "text/javascript",
          body: true,
          'data-environment':"sandbox",
          'data-client-key':"VT-client-kev115vEOPOwkRiV"
      },
      {
        src: 'http://cdnjs.cloudflare.com/ajax/libs/toastr.js/2.0.2/js/toastr.min.js'
      },

        // {
        //     src: "/js/jquery.min.js",
        //     type: "text/javascript"
        // },
        // {
        //     src:"/js/popper.min.js",
        //     type: "text/javascript"
        // },
        // {
        //     src:"/js/bootstrap.min.js",
        //     type: "text/javascript"
        // }
    ]
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
      '~plugins/mixins/user.js',
      { src: '~plugins/bootstrap.js' },
      { src: '~/plugins/after-each', mode: 'client' },
      { src: '~/plugins/slicknav.js',ssr:false},
      { src: '~/plugins/custom.js',ssr:false },
      { src: '~/plugins/owl.js', ssr: false},
      { src: '~/plugins/vue-lazyload', ssr: false },
      { src: '~/plugins/infiniteloading', ssr: false },
      { src: '~/plugins/axios', ssr: false , mode: 'server' },
      { src: '~/plugins/vuex-persist', ssr: false, mode: 'client' },
      { src: '~/plugins/vuejs-paginate', ssr: false, mode: 'client'},
      { src:'~plugins/vue-scrollto.js',ssr:false},
      { src: '~/plugins/localStorage.js', ssr: false },
      // { src: '~/plugins/owl.carousel.js', ssr: false }
      
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
      "nuxt-svg",
      '@nuxtjs/proxy',
      '@nuxtjs/auth',
      '@nuxtjs/toast',
      '@nuxtjs/ngrok',

  ],

   proxy: {
    // Simple proxy
    // '/api': ' https://api.sandbox.midtrans.com',
    '/api/': { target: 'https://app.sandbox.midtrans.com', pathRewrite: {'^/api/': ''} },

    // With options
    '/api2/': { target: 'https://api.shipper.id',pathRewrite: {'^/api2/': ''} },
    //with options
    '/apii33/': {target: 'https://sandbox.kredivo.com', pathRewrite: {'^/apii33/': ''}},
    '/liveapi/': {target: 'http://localhost:8000/api', pathRewrite: {'^/liveapi/': ''}},
    // // Proxy to backend unix socket

    // '/api3': {
    //   changeOrigin: false,
    //   target: { socketPath: '/var/run/http-sockets/backend.sock' }
    // }
  },
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: process.env.BASE_URL,
    proxy: true
  },
  auth: {
    redirect: {
      login: '/login',
      logout: '/login',
      callback: '/',
      home: '/'
    },
    strategies: {
      local: {
        endpoints: {
          login: { url: 'login', method: 'post', propertyName: 'meta.token' },
          user: { url: 'user', method: 'get', propertyName: 'data' },
          logout: { url: 'logout', method: 'post' }
        }
      }
    }
  },
  toast: {
      position: 'top-right',
      register: [ // Register custom toasts
        {
          name: 'my-error',
          message: 'Oops...Something went wrong',
          options: {
            type: 'error'
          }
        }
      ]
  },
  env: {
    baseURL: process.env.BASE_URL,
    IMAGE_URL: process.env.IMAGE_URL,
    proxy:true,
    debug:true
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
      // extend(config, options) {
      //   return Object.assign({}, config, {
      //     devtool: 'source-map'
      //   })
      // }
      extend(config, ctx) {
        if (ctx.isDev) {
          config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map'
        }
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
