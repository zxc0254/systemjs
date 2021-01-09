const webpack = require('webpack')
const bundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const baseConfig = require('./webpack.config.base')
// const px2rem = require('postcss-px2rem')
const path = require('path')
const HOST = '0.0.0.0'
const PORT = 8081
const {checkWebpackConfig, modifyWebpackConfig} = require('systemjs-webpack-interop/webpack-config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const SystemJSPublicPathWebpackPlugin = require('systemjs-webpack-interop/SystemJSPublicPathWebpackPlugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const {CleanWebpackPlugin} = require('clean-webpack-plugin')


const config = {
    entry: baseConfig.entry,
    // resolve: baseConfig.resolve,
    output: {
        path: path.resolve(__dirname, './dist'),
        // publicPath: './',
        filename: '[name].bundle.js',
        // chunkFilename: '[name].[hash].chunk.js'
        // libraryTarget: 'system'
    },

    node: {
        fs: 'empty'
    },
    // devServer: {
    //   clientLogLevel: 'warning',
    //   hot: true,
    //   contentBase: 'dist',
    //   compress: true,
    //   host: HOST,
    //   port: PORT,
    //   open: true,
    //   overlay: { warnings: false, errors: true },
    //   publicPath: '/',
    //   quiet: true,
    //   headers: { 'Access-Control-Allow-Origin': '*' }
    // },
    optimization: {
        splitChunks: false
    },
    devtool: 'sourcemap',
    module: {
        rules: [
            {
                parser: {
                    system: false
                }
            },
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                exclude: '/node_modules/',
                use: [{
                    loader: 'babel-loader'
                }]

            },

            {
                test: /\.(css|scss)$/,
                use: [
                    'vue-style-loader',
                    'css-loader', // 'postcss-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: (loader) => {
                                return {
                                    ident: 'postcss',
                                    plugins: [
                                        ['postcss-import', {root: loader.resourcePath}],
                                        'postcss-preset-env',
                                        ['cssnano', {
                                            preset: 'default',
                                        }],
                                        // ...process.env.NODE_ENV === 'production'
                                        //   ? [purgecss]
                                        //   : []
                                    ]
                                }
                            }
                        }
                    },
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: 'img/[name].[hash:7].[ext]'
                    }
                }
            }, {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: 'media/[name].[hash:7].[ext]'
                    }
                }
            }, {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: 'fonts/[name].[hash:7].[ext]'
                    }
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: './index.html',
            template: path.resolve(__dirname, './src/template.html'),
            inject: false,
            cache: false,
        }),
        new VueLoaderPlugin(),
    ],

    // new bundleAnalyzer({
    //   analyzerMode: 'server',
    //   analyzerHost: '127.0.0.1',
    //   analyzerPort: 8889
    // })

};

// const modify = modifyWebpackConfig(config);


module.exports = config
// module.exports = config;
