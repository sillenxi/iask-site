const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    './src/**/*.html',
    './src/**/*.tsx'
  ],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
})

module.exports = {
  sourceMap: true,
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    // require('postcss-pxtorem')({
    //   rootValue: 19.2,
    //   unitPrecision: 2,
    //   propWhiteList: [],
    //   selectorBlackList: [/^html$/],
    //   replace: true,
    //   mediaQuery: false,
    //   minPixelValue: 0
    // }),
    ...process.env.NODE_ENV === 'production' ? [purgecss] : []
  ]
}
