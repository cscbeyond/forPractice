const path = require('path');
const myLocalServer = 'http://127.0.0.1:2010';
// let resolve = (dir)=>{path.join(__dirname,dir)};
function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    lintOnSave: false,
    filenameHashing: false, //打包后的文件名 不加hash
    productionSourceMap: false, //不生成map文件（未加密、调试用）
    chainWebpack: config => {
        // 添加别名
        config.resolve.alias
            .set('@', resolve('./src'))
            .set('assets', resolve('./src/assets'))
            .set('components', resolve('./src/components'))
            .end()
        config.module
            .rule('ttf')
            .test(/\.ttf$/)
            .use('file-loader')
            .loader('file-loader')
            .end()
    },
    devServer: {
        host: "0.0.0.0",
        port: 2011,
        hot: true,
        proxy: {
            ".*.(do|api)": {
                target: myLocalServer
            },
            ".*api/.*": {
                target: myLocalServer
            }
        }
    }
}