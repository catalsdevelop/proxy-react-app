const path = require('path')

module.exports = {
  devServer: {
    before: require('./mock/index')
  }
}