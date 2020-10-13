<h2 align="center">Boilerplate - Bootstrap v4 - SASS - JQuery - WebPack</h2>

<p align="center">    
            <a href="https://webpack.js.org/"><img alt="Webpack" src="https://img.shields.io/badge/Webpack-4.41.6-%238DD6F9.svg"></a>
                <a href="https://babeljs.io/"><img alt="Webpack" src="https://img.shields.io/badge/Babel%2FCore-7.8.4-%23f5da55.svg"></a>
                <a href="https://www.npmjs.com/package/gulp-sass"><img alt="node-sass" src="https://img.shields.io/badge/node--sass-v4.13.1-ff69b4.svg"></a>
                <a href="https://eslint.org/"><img src="https://img.shields.io/badge/es--lint-5.15.1-%23463fd4.svg" alt="eslint"></a>
                <a href="https://icons8.com/line-awesome"><img alt="Line Awesome" src="https://img.shields.io/badge/Line%20Awesome-1.3.0-green"></a>
</p>

![webpack logo](https://abload.de/img/webpack1tkeb.png)
![babel logo](https://abload.de/img/2000px-babel_logo.svgrzkxw.png)
![sass logo](https://abload.de/img/1280px-sass_logo_colo0bjb4.png)


<p align="center">
  <em>
  SASS
  · Babel
  </em>
</p>

This Webpack4-Sass Boilerplate contains the following features:

- Webpack4 & Dev-Server
- Babel ES6 Compiler
- Animate.css Library v3.7.2
- concentrate and minify JavaScript.
- Compile, minify, Autoprefix SASS.
- Optimize and Cache Images

## Features

### Webpack Loaders & Plugins

This project contains the following loaders & plugins:

- `node-sass` for compiling sass (SCSS)
- `babel-loader` for compiling ES6 code
- `webpack-dev-server` for serving & Hot-Reloading
- `css-loader` for compressing css
- `sass-loader` for compressing and loading scss & sass
- `url- & file-loader` for loading and optimizing images
- `html-loader` for loading & optimizing html files
- `clean-webpack-plugin` for keeping your dist folder clean
- `favicons-webpack-plugin` generate favicons form your "logo.png"


## Getting Started

### Dependencies

Make sure these are installed first.

- [Node.js](http://nodejs.org)
- [Webpack](https://webpack.js.org/guides/installation/)

     `npm install --g webpack`

<hr/>

### Quick Start

1. Clone the repo :
      `git clone https://github.com/AndyKorek/webpack-boilerplate-sass-ts-bootstrap4-fontawesome.git`
2. In bash/terminal/command line, `cd ` into project directory.
3. Run `npm i` to install required dependencies.

4. Run the Dev Server with (with Hot Reloading) `npm run dev`

<hr/>

### Build the Production Folder
`npm run build`

This will:

- Bundle and Minify SASS(scss) to css & Hash and Cash it
- generate GZip and Brodli Compressed Assets
- Bundle and Minify JS
- Optimize Images
- Optimize HTML
- generate Favicons

<hr/>

## Documentation

### Workflow structure

`src` - > source directory

`dist` -> build directory


```

├── src
│   ├── assets
|   |   ├── fonts
|   |   |     ├── raleway
|   |   |     └── xxx yourFont xxx
│   │   └── images
│   ├── js
│   │   ├── custom.js
|   |   └── vendor.js
│   ├── styles
│   │   ├── _vendor
|   |   |     ├── hamburgers
|   |   |     └── animatecss.scss
│   │   ├── basics
|   |   |     ├── _setup.scss
|   |   |     └── _typography.scss│
|   │   ├── _utils
|   |   |     ├── _mixins.scss
|   |   |     └── _variables.scss
|   │   ├── globals.scss
│   │   └── styles.scss
│   |── .htaccess
│   |── 404.html
│   |── index.html
│   └── app.js


├── dist
│   ├── assets
│   │   ├── images
│   │   └── 
│   ├── css
│   │   ├── vendors.[contenthash].css
│   │   └── main.contenthash].css
│   ├── js
│   │   ├── main.[contenthash].js
│   │   ├── runtime.[contenthash].js
│   │   └── vendors.[contenthash].js
│   │   
│   └── index.html

```
put your custom js to `src/js/custom.js`


<hr/>

### Instructions

- Add `sass`(.scss) files to `src/styles` folder.

    - Make sure you import the scss file in `styles.scss`
      ```
      @import "filename";
      ```
- Add your assets to `src/assets/`

- Add `images` to `src/assets/images`

## TODO list

- [ ] Add Tailwind
- [ ] Upgrade to Webpack 5
- [ ] Adding LineAwesome Latest
- [x] Assets Loader
- [x] Separated location for Bundled Files
- [x] Adding EsLint
- [x] Uglify and Minify JS with Terser

## Licence

Code released under the [MIT License](https://github.com/AndyKorek/webpack4_boilerplate/blob/master/LICENSE).

*</> with* :heart: *from Germany*
