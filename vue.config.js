module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  },
  devServer: {
    port: 7000,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      "/api/": {
        // 以 “/api” 开头的 代理到 下边的 target 属性 的值 中
        target: 'https://api-cn.faceplusplus.com',
        // changeOrigin: true, // 是否改变域名
        // ws: true,
        pathRewrite: {
          // 路径重写
          "/api": "/" // 这个意思就是以api开头的，定向到哪里, 如果你的后边还有路径的话， 会自动拼接上
        }
      }
    }
    // 下边这个， 如果你是本地自己mock 的话用after这个属性，线上环境一定要干掉
    // after: require("./mock/mock-server.js")
  }
}
