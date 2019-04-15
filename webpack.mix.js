const mix = require('laravel-mix')
const autoprefixer = require('autoprefixer')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

mix.sass('src/sass/main.sass', 'css')

  .webpackConfig({
    plugins: [
      new BrowserSyncPlugin({
        host: 'localhost',
        port: 3000,
        server: { baseDir: ['./'] }
      })
    ]
  })

  .options({
    processCssUrls: false,
    postCss: [
      autoprefixer
    ]
  })
