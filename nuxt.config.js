export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Flopert :: Compra alimentos frescos todos los días.',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
      { hid: 'description', name: 'description', content: 'Comprá productos cerca de ti y ahorra hasta 30% en todos tus ingredientes, con productos frescos, directos del campo, sobre pedido. Trabajamos bajo demanda, lo que nos permite no tener almacenes y por lo tanto, menos desperdicio de alimentos.' },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        name: 'og:url',
        content: 'https://flopert.com',
      },
      { hid: 'og:locale', name: 'og:locale', content: 'es_MX' },
      {
        hid: 'og:image',
        name: 'og:image',
        content: '/images/store/papa-hortalizas.jpg',
      },
      { name: 'msapplication-TileColor', content: '#000000' },
      {
        name: 'msapplication-TileImage',
        content: '/icon.png',
      },
      { name: 'theme-color', content: '#000000' },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '194x194',
        href: '/icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        href: '/icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/icon.png',
      },
      {
        rel: 'mask-icon',
        href: '/app.svg',
        color: '#fff',
      },
      {
        rel: 'shortcut icon',
        type: 'image/png',
        href: '/icon.png',
      },
      {
        rel: 'apple-touch-icon',
        type: 'image/png',
        href: '/icon.png',
      },
    ],
    script: [
      {src: 'https://www.googletagmanager.com/gtag/js?id=G-ZZMSFGWR3K',async: true},
      {src: '/js/analytics.js'},
      {src: '/js/hotjar.js'},
    ],
  },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [ 
    { src: "~/plugins/typed.js", ssr: true },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [

    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    //sitemap
    '@nuxtjs/sitemap',
  ],
  sitemap: {
    // options
    path: '/sitemap.xml',
    hostname: 'https://flopert.com'
  },
  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
