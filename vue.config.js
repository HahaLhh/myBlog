// vue.config.js
module.exports = {
//  baseUrl: '/',   //根路径
  publicPath: './',
  outputDir: 'dist', // 打包的目录 构建输出目录
  assetsDir: 'assets',//静态资源目录(js.css.img.fonts)
  lintOnSave: true, // 在保存时校验格式 是否开启eslint保存检测 true false error
  productionSourceMap: false, // 生产环境是否生成 SourceMap
  devServer: {
    open: true, // 启动服务后是否打开浏览器
    host: 'localhost', //主机名 
    port: 8091, // 服务端口
    https: false, 
    hotOnly: false, 
    proxy: {
      //配置跨域
      '/api':{
        target: 'http//localhost:8091/api/',
        ws: true,
        changOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }, 
    before: app => {}
  },
  configureWebpack: {
    devtool: 'source-map'
  }
}