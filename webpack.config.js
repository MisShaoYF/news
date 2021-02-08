const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const uglify = require('uglifyjs-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    // 模式
    mode:"development",

    // 禁止压缩
    optimization: {
        minimize: false
    },
    entry: {
        index: path.resolve(__dirname, './src/js/index.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'js/[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: path.resolve(__dirname,'node_modules'),
                query: {
                  'presets': ['latest']
                }
            },
            {
                test: /\.tpl$/,
                loader: 'ejs-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function () {
                                // 兼容浏览器五个版本
                                return [autoprefixer('last 5 versions')];
                            }
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function () {
                                return [autoprefixer('last 5 versions')];
                            }
                        }
                    },
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif|ico|woff|eot|svg|ttf)$/i,
                loaders: 'url-loader?limit=1024&name=img/[name]-[hash:16].[ext]'
            }
        ]
    },
    plugins: [
        new uglify(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname,'src/index.html'),
            title: '新闻头条11',
            chunks: ['index'],
            chunksSortMode: 'manual',//必须配置 可能有多个chunk 需要手动排 按照chunks里面数组顺序来排
            excludeChunks: ['node_modules'],
            hash: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true
            }
        }),

        new miniCssExtractPlugin({
            filename:'css/[name].css'
        })
    ],
    // 开发服务器的配置
    devServer: {
        watchOptions: {
            ignored: /node_modules/
        },
        open: true,
        host: 'localhost',
        port: 3001
    }
}