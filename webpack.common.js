// Common Config is used in Development and Production Mode.
const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');


const paths = {
    dest: {
        img: 'assets/images/'
    },
    build: path.resolve(__dirname, 'dist')
};

module.exports = {
    entry: {
        main: './src/js/index.js',
        vendor: './src/js/_vendor.js',
    },
    output: {
        path: paths.build,
        filename: './js/[name].js',
    },
    module: {
        rules: [
            //  HTML Loader
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {minimize: true}
                    }
                ]
            },
            // Image Loader
            {
                test: /\.(png|jpeg|jpg|webp|gif|ico|svg)/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            publicPath: '../',
                            name: paths.dest.img + '[name].[ext]',
                            limit: 10000,
                        }

                    },
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        name: 'fonts/[name].[hash:6].[ext]',
                        publicPath: '../',
                        limit: 8192,
                    }
                }]
            },
            //  Babel esLint
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader'
            },
            // Babel Loader
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            //  CSV/TSV Loader
            {
                test: /\.(csv|tsv)$/,
                use: [
                    'csv-loader'
                ]
            },
            // XML Loader
            {
                test: /\.xml$/,
                use: [
                    'xml-loader'
                ]
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new HtmlWebPackPlugin({
            template: 'src/index.html',
            filename: './index.html',
            inject: 'head'
        }),
        // Load Lodash Features Separately https://www.npmjs.com/package/lodash-webpack-plugin
        new LodashModuleReplacementPlugin({
            'collections': true,
            'paths': true
        }),
        new ScriptExtHtmlWebpackPlugin({
            defaultAttribute: 'defer'
        }),
    ]
};
