const path = require('path')
// const VueLoaderPlugin = require('vue-loader/lib/plugin')

// const {CleanWebpackPlugin} = require('clean-webpack-plugin')


module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.js')
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
    },
    externals: {
        System: 'systemjs',
        Vue: "vue",
        Vuex: "vuex",
        vueRouter:"vue-router",
    },
    module: {
        rules: [
            {
                parser: {
                    system: false
                }
            },
            {
                test: /\.vue$/,
                use: {
                    loader: 'vue-loader'
                }
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
                            plugins: [
                                require('autoprefixer'),
                                require('postcss-import'),
                                require('precss'),
                                // px2rem({ remUnit: 100 })
                            ]
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
    plugins: []
}
