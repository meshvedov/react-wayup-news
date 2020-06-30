const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = (env = {}) => {

    const { mode = 'development' } = env
    const isProd = mode === 'production'
    const isDev = mode === 'development'

    const getStyleLoaders = () => {
        return [
            // isProd ? MiniCssExtractPlugin.loader : 'style-loader',
            {
                loader: MiniCssExtractPlugin.loader,
                options: {
                    hmr: isDev,
                    reloadAll: true
                }
            },
            'css-loader',
            'sass-loader'
        ]
    }

    const getPlugins = () => {
        const plugins = [
            new HtmlWebpackPlugin({
                template: 'public/index.html',
                minify: {
                    collapseWhitespace: isProd
                }
            }),
            new CleanWebpackPlugin(),
            new CopyWebpackPlugin({
                patterns: [
                    {from: 'public/assets/', to: ''}
                ]
            }),
            new MiniCssExtractPlugin({
                filename: 'main-[hash:8].css'
            })
        ]

        // if (isProd) {
        //     plugins.push(new MiniCssExtractPlugin({
        //         filename: 'main-[hash:8].css'
        //     }))
        // }

        return plugins
    }

    const optimization = () => {
        const config = {
            splitChunks: {
                chunks: 'all'
            }
        }

        if (isProd) {
            config.minimizer = [
                new OptimizeCssAssetsPlugin(),
                new TerserWebpackPlugin()
            ]
        }
        return config
    }

    return {
        mode: isProd ? 'production' : isDev && 'development',
        entry: ['@babel/polyfill','./src/index.js'],
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist'),
            // publicPath: '/dist/'
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react',
                        ],
                        plugins: [
                            '@babel/plugin-syntax-class-properties',
                            '@babel/plugin-proposal-class-properties',
                        ]
                    }
                },
                {
                    test: /\.(s[ca]ss)$/,
                    use: getStyleLoaders()
                },
                {
                    test: /\.(png|jpg|jpeg|gif|ico)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                outputPath: 'img',
                                name: '[name]-[sha1:hash:7].[ext]'
                            }
                        }
                    ]
                },
                {
                    test: /\.(ttf|otf|eot|woff|woff2)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                outputPath: 'fonts',
                                name: '[name].[ext]'
                            }
                        }
                    ]
                }
            ]
        },
        plugins: getPlugins(),
        devServer: {
            contentBase: path.resolve(__dirname, 'dist'),
            historyApiFallback: true
        },
        optimization: optimization(),
        devtool: isDev ? 'source-map' : '',
    }
}