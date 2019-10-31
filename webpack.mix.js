const mix = require('laravel-mix')
const autoprefixer = require('autoprefixer')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

mix.sass('src/sass/main.sass', 'css')
  .sass('countryList/src/styles.sass', 'countryList/dist/css')
  .react('countryList/src/main.js', 'countryList/dist/js')
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

if (mix.inProduction()) {
  mix.webpackConfig({
    externals: {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      },
      'prop-types': {
        root: 'PropTypes',
        commonjs: 'prop-types',
        commonjs2: 'prop-types',
        amd: 'prop-types'
      }
    },
    output: {
      libraryTarget: 'umd'
    }
  })
}