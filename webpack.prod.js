const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const imageminMozjpeg = require('imagemin-mozjpeg');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const paths = {
    dest: {
        img: 'assets/images/'
    },
    build: path.resolve(__dirname, 'dist')
};

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    output: {
        path: paths.build,
        filename: './js/[name].[contenthash].js',
    },
    module: {
        rules: [
            //  CSS/SCSS Loader & Minimizer
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ],
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash].css',
        }),
        new webpack.HashedModuleIdsPlugin(),
        new ImageminPlugin({
            test: /\.(jpe?g|png|gif|svg)$/i,
            gifsicle: { // lossless gif compressor
                optimizationLevel: 9
            },
            pngquant: ({ // lossy png compressor, remove for default lossless
                quality: '75'
            }),
            plugins: [imageminMozjpeg({ // lossy jpg compressor
                quality: '75'
            })]
        }),
        new FaviconsWebpackPlugin({
            // Your source logo
            logo: './src/assets/images/sample-logo.png',
            // The prefix for all image files (might be a folder or a name)
            prefix: 'assets/icons_[hash:6]/',
            // Emit all stats of the generated icons
            emitStats: false,
            // The name of the json containing all favicon information
            statsFilename: 'iconstats-[hash].json',
            // Generate a cache file with control hashes and
            // don't rebuild the favicons until those hashes change
            persistentCache: true,
            // Inject the html into the html-webpack-plugin
            inject: true,
            // favicon background color (see https://github.com/haydenbleasel/favicons#usage)
            background: '#fff',
            // favicon app title (see https://github.com/haydenbleasel/favicons#usage)
            title: 'Sample App',

            // which icons should be generated (see https://github.com/haydenbleasel/favicons#usage)
            icons: {
                android: true,
                appleIcon: true,
                appleStartup: true,
                coast: false,
                favicons: true,
                firefox: true,
                opengraph: false,
                twitter: false,
                yandex: false,
                windows: false
            }
        })
    ],
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        },
        minimizer: [
            new TerserPlugin({
                cache: true,
                parallel: 4,
                sourceMap: true,
                terserOptions: {
                    test: /\.js(\?.*)?$/i,
                    exclude: /node_modules/,
                }
            }),
            new OptimizeCSSAssetsPlugin({})
        ],
    },
});

