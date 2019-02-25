module.exports = {
  configureWebpack: {
    externals: {
      lodash: {
        commonjs: 'lodash',
        commonjs2: 'lodash',
        root: '_'
      }
    }
  }
}