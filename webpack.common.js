const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');


const buildPath = path.resolve(__dirname, 'dist');


const paths = {
    dest: {
        img: 'assets/images/'
    }
};

module.exports = {
    entry: {
        app: './src/js/index.js',
        vendor: './src/js/_vendor.js',
    },
    output: {
        path: buildPath,
        filename: 'js/[name].[contenthash].js'
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
                            name: paths.dest.img + '[name].[ext]',
                            limit: 10000
                        }

                    },
                    {
                        loader: 'img-loader'
                    },
                ]
            },
            //  Babel Loader
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader'
            },
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
        new CleanWebpackPlugin(),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new HtmlWebPackPlugin({
            template: 'src/index.html',
            filename: './index.html'
        }),
        // Load Lodash Features Separately https://www.npmjs.com/package/lodash-webpack-plugin
        new LodashModuleReplacementPlugin({
            'collections': true,
            'paths': true
        })
    ]
};
