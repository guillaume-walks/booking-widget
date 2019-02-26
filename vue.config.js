module.exports = {
  configureWebpack: {
    externals: {
      lodash: {
        commonjs: 'lodash.times',
        commonjs2: 'lodash.times',
        root: 'times'
      }
    }
  }
}