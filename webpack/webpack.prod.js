// Merges webpack.common config with this production config
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// Optimisations and Compression
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const imageminMozjpeg = require('imagemin-mozjpeg');


// Optional
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');


module.exports = merge(common, {
    mode: 'production',
    optimization: {
        minimizer: [
            new TerserPlugin({
                test: /\.js(\?.*)?$/i,
                exclude: /node_modules/,
                cache: true,
                parallel: 4,
                sourceMap: true,
            }),
            new OptimizeCSSAssetsPlugin({})
        ],
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all',
            // maxInitialRequests: Infinity,
            // minSize: 0,
            cacheGroups: {
                vendor: {
                    test: /node_modules/, // you may add "vendor.js" here if you want to
                    name: "node-modules",
                    chunks: "initial",
                    enforce: true
                },
            }
        },
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CompressionPlugin({
            test: /\.(js|css|html|svg)$/,
            filename: '[path].br[query]',
            algorithm: 'brotliCompress',
            compressionOptions: { level: 11 },
            threshold: 10240,
            minRatio: 0.8,
            deleteOriginalAssets: false
        }),
        new CompressionPlugin({
            filename: '[path].gz[query]',
            algorithm: 'gzip',
            test: /\.js$|\.css$|\.html$/,
            threshold: 10240,
            minRatio: 0.8,
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[hash:6].css',
            chunkFilename: 'css/[name].[contenthash].css',

        }),
        new ImageminPlugin({
            test: /\.(jpe?g|png|gif|svg)$/i,
            // lossLess gif compressor
            gifsicle: {
                optimizationLevel: 9
            },
            // lossy png compressor, remove for default lossLess
            pngquant: ({
                quality: '75'
            }),
            // lossy jpg compressor
            plugins: [imageminMozjpeg({
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
            // which icons should be generated (see https://github.com/haydenbleasel/favicons#usage)
            icons: {
                android: true,
                appleIcon: true,
                favicons: true,
                firefox: true,
                windows: false
            }
        }),
    ]
});
