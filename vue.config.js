const path = require('path');

module.exports = {
  outputDir: './build',
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       views: '@/views'
  //     }
  //   }
  // }
  // configureWebpack: (config) => {
  //   config.resolve.alias = {
  //     '@': path.resolve(__dirname, 'src'),
  //     views: '@/views'
  //   }
  // },
  chainWebpack: (config) => {
    config.resolve.alias.set('@', path.resolve(__dirname, 'src')).set('views', '@/views');
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8000',
        pathRewrite: { '^/api': '' },
        changeOrigin: true, // target是域名的话，需要这个参数，
        secure: false // 设置支持https协议的代理
      }
    }
  }
};
