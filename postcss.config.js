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
    // })
  ]
}
