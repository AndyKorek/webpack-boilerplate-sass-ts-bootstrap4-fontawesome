const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');


module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    module: {
        rules: [
            //  CSS/SCSS Loader & Minimizer
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].[chunkHash].css',
            chunkFilename: 'css/[name].[id].css'
        }),
    ],
    optimization: {
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

