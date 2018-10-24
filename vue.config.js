const PRODUCT = process.env.NODE_ENV == "production";
module.exports = {
  lintOnSave: false,
  baseUrl: PRODUCT ? "/wec-user-mngt/newuser" : "",
  outputDir: "./webapp",
  pages: {
    index: {
      // page 的入口
      entry: "src/main",
      // 模板来源
      template: "public/index.html",
      // 在 dist/index.html 的输出
      filename: "index.html",
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: "ts-admin-title",
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ["chunk-vendors", "chunk-common", "index"]
    }
  },
  devServer: {
    proxy: {
      "/wec-user-mngt": {
        target: "http://172.16.9.101:8082",
        // target: 'http://172.20.4.218:8080',
        // ws: true,
        changeOrigin: true
      }
    }
  }
};
