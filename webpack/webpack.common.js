// Common Config is used in Development and Production Mode.
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');


// Linting
const TSLintPlugin = require('tslint-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.ts',
        lineAwesome: './src/ts/line-awesome.ts',
        vendor: './src/ts/vendor.ts',
        custom: './src/ts/custom.ts',

    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './js/[name].[hash:6].bundle.js'
    },
    module: {
        rules: [
            // Raw Loader
            {
                test: /\.txt$/,
                use: 'raw-loader'
            },
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
            //  CSS/SCSS Loader & Minimizer
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
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
                        loader: 'resolve-url-loader',
                        options: {}
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                            sourceMapContents: false

                        }
                    }
                ],
            },
            // Image Loader
            {
                test: /\.(png|jpeg|jpg|webp|gif|ico|svg)/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                           // publicPath: '../',
                            name: './assets/images/' + '[name].[ext]',
                            limit: 10000,
                            publicPath: '../'
                        }

                    },
                ]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: './fonts/[name].[hash:6].[ext]',
                            publicPath: '../',
                            limit: 8192 },
                    },
                ],
            },
            //  Babel esLint
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
            },
            // Babel Loader
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            // XML Loader
            {
                test: /\.xml$/,
                use: [
                    'xml-loader'
                ]
            },
        ]
    },
    resolve: {extensions: ['.js', '.jsx', '.tsx', '.ts', '.json']},
    plugins: [
    new CleanWebpackPlugin(),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new HtmlWebPackPlugin({
            title: 'webpack4 Boilerplate',
            template: './src/index.html',
            filename: 'index.html',
            inject: 'body',
            minify: false,
        }),
        new HtmlWebPackPlugin({
            title: 'tris-404-page',
            filename: '404.html',
            template: './src/404.html',
            inject: 'body',
            minify: false
        }),
        new ScriptExtHtmlWebpackPlugin({
            defaultAttribute: 'defer'
        }),
        // // Load Lodash Features Separately https://www.npmjs.com/package/lodash-webpack-plugin
        new LodashModuleReplacementPlugin({
            'collections': true,
            'paths': true,
        }),
        new TSLintPlugin({
            files: ['./src/ts/*.ts']
        }),
        new StylelintPlugin( {
            files: ['./src/sass/*.s?(a|c)ss'],
            configFile: './config/.stylelintrc',
            emitError: true,
            emitWarning: true,
            failOnError: false,
            fix: true
        })
    ],
};
