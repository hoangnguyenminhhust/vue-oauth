// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true,
// })

module.exports = {
    devServer: {
    open: process.platform === 'linux',
    host: 'kubernetes.docker.internal',
    port: 8080, // CHANGE YOUR PORT HERE!
    https: true,
    // hotOnly: false,
    compress: true,
    // disableHostCheck: true,// That solved it
  },
}