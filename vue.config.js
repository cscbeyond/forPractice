const path = require('path');

module.exports = {
    baseUrl:'./',
    lintOnSave: false,
    productionSourceMap: false,  //不生成map文件（未加密、调试用）
    chainWebpack: config =>{
        config.module
        .rule('ttf')
        .test(/\.ttf/)
        .use('file-loader')
            .loader('file-loader')
            .end()
    }
}