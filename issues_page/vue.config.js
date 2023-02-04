// const { defineConfig } = require('@vue/cli-service')
const path = require('path');

module.exports = {
  outputDir :  path.resolve(__dirname, "/public"),
  devServer : {
    proxy : {
      "/api" : {
        target : "https://ipbe.onrender.com",
        secure : false
      }
    }
  }
}
