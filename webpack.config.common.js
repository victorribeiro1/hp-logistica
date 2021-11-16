const path = require('path')
const webpack = require('webpack')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const dirSrc = path.join(__dirname, 'src')
const dirSass = path.join(__dirname, 'src', 'sass')
const dirNode = 'node_modules'

module.exports = {
    entry: [
        path.join(dirSrc, 'main.js'),
        path.join(dirSass, 'main.scss')
    ],

    resolve: {
        modules: [
            dirSrc,
            dirSass,
            dirNode,
        ]
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                    use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },

            {
                test: /\.(scss|sass|css)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: ''
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                  //   {
                     // loader: "resolve-url-loader"
                  //   },
                    // {
                    //     loader: 'postcss-loader',
                    //     options: {
                    //         postcssOptions: {
                    //             plugins: ['postcss-preset-env']
                    //         }
                    //     }
                    // },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },

            {
               test: /\.(jpe?g|png|gif|svg|ico)$/i,
               use: [
                  {
                    loader: 'file-loader',
                    options: {
                     esModule: false,
                     name: '[name].[ext]',
                     outputPath: '/assets/',
                     publicPath: '/assets/',
                     postTransformPublicPath: (p) => `__webpack_public_path__ + ${p}`,
                    },
                  },
                ],
            }
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css',
            chunkFilename: '[id].css'
         })
        //  new CleanWebpackPlugin()
    ]
}