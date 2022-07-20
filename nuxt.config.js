
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'zLawyer',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {
        id: 'ze-snippet', 
        src: 'https://static.zdassets.com/ekr/snippet.js?key=e2d18a03-a4bd-4b4d-986b-292fec2fcd83'
      },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    'nuxt-gsap-module',
  ],

  gsap: {
    extraPlugins: {
      scrollTrigger: true
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/recaptcha',
  
  ],

  publicRuntimeConfig: {
    recaptcha: {
      /* reCAPTCHA options */
      hideBadge: false,
      language: 'FR',   // Recaptcha language (v2)
      //mode: 'enterprise',       // Mode: 'base', 'enterprise'
      siteKey: '6LeLYOUgAAAAAMLyGgi4_Owoy-HHuvQAgjoElWHN',    // Site key for requests
      version: 2,    // Version
      size: 'normal'        // Size: 'compact', 'normal', 'invisible' (v2)
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
