const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');

// Linting

module.exports = {
  entry: {
    index: './src/app.js',
    vendor: './src/js/vendor.js',
    custom: './src/js/custom.js',
  },
  output: {
    // eslint-disable-next-line no-undef
    path: path.resolve(__dirname, '../dist'),
    filename: './js/[name].js'
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
            options: { minimize: true }
          }
        ]
      },
      //  CSS/SCSS Loader & Minimizer
      {
        test: /\.s[ac]ss$/i,
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
            options: {
              exclude: 'node_modules'
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              sourceMapContents: false,
            }
          },
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [path.resolve(__dirname, '../src/styles/global.scss')]
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
              name: './assets/images/[name].[ext]',
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
              name: './assets/fonts/*/[name].[hash:6].[ext]',
              publicPath: '../',
              limit: 8192
            },
          },
        ],
      },
      // Babel Loader
      {
        test: /\.js(x?)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
    ]
  },
  resolve: {
    extensions: [ '.js', '.jsx', '.json' ]
  },
  plugins: [
    new CleanWebpackPlugin(),
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
    new StylelintPlugin({
      files: [ './src/styles/*.s?(a|c)ss' ],
      configFile: '.stylelintrc',
      emitError: true,
      emitWarning: true,
      failOnError: false,
      fix: true
    })
  ],
};
