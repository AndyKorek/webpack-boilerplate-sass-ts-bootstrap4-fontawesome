<h2 align="center">Boilerplate - Bootstrap v4 - SASS - JQuery - WebPack</h2>

<p align="center">    
<a href="http://getbootstrap.com/"><img alt="Bootstrap" src="https://img.shields.io/badge/Bootstrap-v4.3.1-563d7c.svg"></a>
                <a href="https://webpack.js.org/"><img alt="Webpack" src="https://img.shields.io/badge/Webpack-4.29.6-%238DD6F9.svg"></a>
                <a href="https://babeljs.io/"><img alt="Webpack" src="https://img.shields.io/badge/Babel%2FCore-7.3.4-%23f5da55.svg"></a>
                <a href="https://www.npmjs.com/package/gulp-sass"><img alt="node-sass" src="https://img.shields.io/badge/node--sass-v4.11.0-ff69b4.svg"></a>
                <a href="https://jquery.com/"><img src="https://img.shields.io/badge/jQuery-3.3.1-blue.svg" alt="jquery"></a>
                <a href="https://lodash.com/"><img src="https://img.shields.io/badge/lodash-4.17.11-blue.svg" alt="jquery"></a>
                <a href="https://popper.js.org/"><img src="https://img.shields.io/badge/popper.js-1.14.7-blue.svg" alt="popper.js"></a>
                <a href="https://eslint.org/"><img src="https://img.shields.io/badge/es--lint-4.19.1-%23463fd4.svg" alt="eslint"><a/>
                <a href="https://fontawesome.com/"><img alt="node-sass" src="https://img.shields.io/badge/Font--Awesome-5.7.1-blue.svg"></a>
</p>

![bootstrap logo](https://abload.de/img/bootstrap-logo-vector78khf.png)
![babel logo](https://abload.de/img/2000px-babel_logo.svgrzkxw.png)
![webpack logo](https://abload.de/img/webpack1tkeb.png)
![sass logo](https://abload.de/img/1280px-sass_logo_colo0bjb4.png)

<p align="center">
  <em>
  SASS
  · Babel
  · Bootstrap
  · JQuery
  · PopperJS
  · Font Awesome
  </em>
</p>

This Webpack4-Sass Boilerplate contains the following features:

- Webpack4 & Dev-Server
- TypeScript 3.4.5
- Babel ES6 Compiler
- Bootstrap v4
- Font Awesome v5.7
- Animate.css Library v3.7.0
- JQuery v3.3.1
- PopperJS
- lodash
- concentrate and minify JavaScript.
- Compile, minify, autoprefix SASS.
- Optimize and Cache Images

## Features

### Webpack Loaders & Plugins

This project contains the following loaders & plugins:

- `node-sass` for compiling sass (SCSS)
- `babel-loader` for compiling ES6 code
- `babel-eslint && eslint-loader` for Linting your .js
- `tslint` for Linting your .ts 
- `lodash-webpack-plugin` create smaller Lodash builds by replacing feature sets of modules with noop, identity, or simpler alternatives.
- `webpack-dev-server` for serving & Hot-Reloading
- `css-loader` for compressing css
- `sass-loader` for compressing and loading scss & sass
- `url- & file-loader` for loading and optimizing images
- `xml and csv loader` for loading data files
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
      `git clone https://github.com/AndyKorek/Webpack4_Boilerplate.git
     `
2. In bash/terminal/command line, `cd webpack4_boilerplate` into project directory.
3. Run `npm i` to install required files and dependencies.

4. Run the Dev Server with (with Hot Reloading) `npm run dev`

<hr/>

### Build the Production Folder
`npm run build`

This will:

- Bundle and Minify SASS(scss) to css
- Bundle and Minify JS
- Optimize Images
- Optimize HTML

<hr/>

## Documentation

### Workflow structure

`src` - > source directory

`dist` -> build directory


```

├── src
│   ├── assets
│   │   |── data
│   │   └── images
│   ├── fonts
│   ├── sass
│   │   ├── _utils
|   |   |     ├── _mixins.scss
│   │   ├── _globals.scss
│   │   ├── _headings.scss
│   │   ├── _typography.scss
│   │   ├── _variables.scss
│   │   ├── _vendor.scss
│   │   └── main.scss
│   ├── ts
│   │   ├── custom.ts
│   │   ├── vendor.ts
│   │   └── index.ts
│   └── index.html
│



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
### Loading the Features you need

in  `src/js/vendor/_boostrap.js` uncomment all Features you need

put your custom js to `src/js/_custom.js`


<hr/>

### Instructions

- Add `sass`(.scss) files to `src/_scss` folder.

    - Make sure you import the scss file in `main.scss`
      ```
      @import "filename";
      ```
- Add your assets to `src/assets/`

- Add `images` to `src/assets/images`

## TODO list

- [x] Bootstrap 4
- [x] Webpack 4
- [x] Jquery
- [x] PopperJS
- [x] Include ES-Lint
- [x] Font-Awesome
- [x] Assets Loader
- [x] Separated location for Bundled Files
- [x] Adding EsLint
- [ ] Code Optimising
- [x] Uglify and Minify JS with Terser

## Licence

Code released under the [MIT License](https://github.com/AndyKorek/webpack4_boilerplate/blob/master/LICENSE).

*</> with* :heart: *from Germany*
