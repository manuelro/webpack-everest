![Everest](https://raw.githubusercontent.com/manuelro/webpack-everest/master/banner.jpg)

# webpack-everest

### Everest is Webpack for Drupal 8 themes without the harsh of having to know how Webpack works.

Everest is a packager that uses the power of Webpack to leverage your front-end production process and enabling you to use industry high quality standards. It uses Webpack for dependencies bundling.

This project was initially started as a solution for a problem I happened to experience very often while generating front-end production ready code (JavaScript, CSS and static assets). It was initially thought for Drupal theming but it will be capable of adapting to also support theme generation for WordPress, although it can be easily extended if you know the how-to.

---
[![License:MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://travis-ci.org/manuelro/webpack-everest.svg?branch=master)](https://travis-ci.org/manuelro/webpack-everest)
[![Coverage Status](https://coveralls.io/repos/github/manuelro/webpack-everest/badge.svg?branch=master)](https://coveralls.io/github/manuelro/webpack-everest?branch=master)

## What's in the box?
- ES6 out of the box
- NPM automatic integration and module loading
- Full Sass support with autoprefix
- Optional bundle graph visualization
- Support for absolute output path
- Support for browser autoreload
- Unit testing with Mocha and Chai

## Folder structure
### Working directory structure (source)
```
│   my-theme.info.yml
│   my-theme.libraries.yml
│   my-theme-preview.png
│
├───config
│       some-config-file.php
├───css
│       feature-one.scss
├───images
│       some-image.png
├───js
│   │   feature-one.js
│   └───tests
│           feature-one.test.js
└───templates
        page.html.twig
```

### Everest output (destination)
```
│   my-theme.info.yml
│   my-theme.libraries.yml
│   my-theme-preview.png
│
├───config
│       some-config-file.php
├───css
│       main.css
├───images
│       some-image.png
├───js
│       bundle.js
│       commons.bundle.js
└───templates
        page.html.twig
```

## Installation and configuration
### Installation
#### Add Everest core to your NPM packages
To start using Everest you have two options, to install it and copy all the files from the [sample app](https://github.com/manuelro/webpack-everest-sample.git) or simply by cloning the sample app to your local machine:
```
npm install webpack-everest --save-dev
```

#### Or simply clone the sample app repo
```
git clone https://github.com/manuelro/webpack-everest-sample.git
```
#### Install the dependencies
Make sure to run `npm install` to install everything Everest needs:

### Drupal settings
The easiest way to start a Drupal project is by usin [Acquia Dev Desktop](https://dev.acquia.com/downloads), it allow you not only to create your Drupal instance, but will also generate a local domain for your project, which we'll use for our Everest configuration later on.

#### Troubleshooting Drupal 8
- Disable Drupal 8 cache and enable Twig debugging (see this great [video tutorial](https://www.youtube.com/watch?v=rRsOxSuJ4OU&spfreload=1#t=148.143827)), remember to enable cache again once you're done with the development of your theme.
- The first time you generate your theme Drupal 8 will complain and show you some errors, to fix it, make sure you run `http://mysitelocaldomain.com/rebuild.php`, this is going to refresh Drupal 8 internals and show you the theme working.

## Everest API
Everest API is very simple and is composed of only a few methods that will enable you to start working on your theme ASAP.

**By default Everest will look for a `./src` folder in your project root, this is a convention and will always be respected by Everest.**

### Importing Everest
If you cloned the sample app and installed all of its dependencies you should now be able to import Everest to your `webpack.config.js` file:
```javascript
//FILE: webpack.config.js
const everest = require('webpack-everest');
```
### everest.config.apply()
The `everest.config.apply()` method receives an object literal with configuration options you can pass to Everest for it to organize Webpack internals.
#### Setup CWD path
In order to know where your source files are, Everest needs to know the current working directory of your project root folder (the one where you cloned the [sample app](https://github.com/manuelro/webpack-everest-sample.git)). To do this pass the `__dirname` using the `everest.config.apply()` method:
```javascript
//FILE: webpack.config.js
const everest = require('webpack-everest');

everest.config.apply({
  output: {
    root: __dirname,
  }
});
```
#### Setup the destination folder name
The destination folder is the one which is going to contain your production-ready bundled code. You can either use a relative path or an absolute one, in case your project is inside a very distant folder.
##### Relative folder resolution
```javascript
//FILE: webpack.config.js
const everest = require('webpack-everest');

//Relative folder names will resolve to your working directory
everest.config.apply({
  output: {
    root: __dirname,
    dest: 'dist' //Can be anything, defaults to 'dist'
  }
});
```
##### Absolute folder resolution
```javascript
//FILE: webpack.config.js
const everest = require('webpack-everest');

/*
You can obtain the absolute path of your Drupal 8 themes folder by right
clicking it and copying the full location path. Note that Windows needs to
escape backslashes in order to work as a valid folder location path
*/
everest.config.apply({
  output: {
    root: __dirname,
    dest: 'D:\\my\\local\\drupal\\instalation\\themes\\winter'
  }
});
```

### everest.config.reload()
Everest needs to run again in order to load the new configuration options. `everest.config.reload()` does just that, refreshes the internal state to propagate the changes.
```javascript
//FILE: webpack.config.js
const everest = require('webpack-everest');

everest.config.apply({
  //...
})
.reload();
```
As you can see, Everest supports method chaining for a cleaner coding experience. The equivalent to the previous code is the following:
```javascript
//FILE: webpack.config.js
const everest = require('webpack-everest');

everest.config.apply({/*...*/});
//It can be called with no arguments at all
everest.config.reload();
```
The reload method takes in an optional string value refering to each one of the top level Webpack API properties (`devtool`, `entry`, `externals`, `module`, `output`, `plugins`).

### everest.config.sync() - Optional
The `everest.config.sync()` method enables [proxying](https://en.wikipedia.org/wiki/Proxy_server) and live reloading of your Drupal 8 theme with anything the server returns with automatic watchers for changes.
```javascript
//FILE: webpack.config.js
const everest = require('webpack-everest');

everest.config.apply({
  //...
})
.reload()
.sync({
  //The local domain provided by Acquia Dev Server
  proxy: 'http://mysitelocaldomain.com'
});
```

This will open a browser and proxy a NodeJS server to the server provided by Acquia, this will automagically listen for changes in your working directory and reload the browser accordingly.

### everest.config.visualize() - Optional
Data visualization in a graphic manner is very important for any front-end developer, it helps you to understand how bundles are organized and the size and optimization you can make to your code in order to keep things simple. This method will open a new browser window with a dynamic data visualization chart, this chart will reload whenever you make a change to your source code.
```javascript
//FILE: webpack.config.js
const everest = require('webpack-everest');

everest.config.apply({
  //...
})
.reload()
.visualize();
```
## Running Webpack
To start the development environment and after configuring your `webpack.config.js` file you can either run `webpack --watch` or you can also create a script in your `package.json` file:
```json
"scripts": {
  "dev": "webpack --watch",
}
```
Then run `npm run dev` from the CLI.

## Unit testing
To unit test your app make sure to add a script to the `scripts` section of your `package.json` file:
```json
"scripts": {
  "dev": "webpack --watch",
  "test": "mocha --recursive --compilers js:babel-core/register src/**/*.test.js --watch --reporter spec"
}
```
Then run `npm run test` from the CLI.

#### Testing React apps
To test React apps you have to first grab a copy of the `dom-setup.js` located in the original repo under `config/utilities/dom-setup.js`, put it wherever you like and add it as a requirement for mocha (using the `--require` flag), and you're ready to start coding.
```json
"scripts": {
  "dev": "webpack --watch",
  "test": "mocha --require dom-setup.js --recursive --compilers js:babel-core/register src/**/*.test.js --watch --reporter spec"
}
```


## Exporting the configuration
Every `webpack.config.js` must export a valid configuration file, in order to do this simply add `module.exports = everest.config.config;` at the end of your Webpack config file:
```javascript
// FILE: webpack.config.js
const everest = require('webpack-everest');

everest.config.apply({
  output: {
    root: __dirname,
    dest: 'D:\\some\\absolute\\path',
  }
})
.reload()
.sync({
  proxy: 'http://mysitelocaldomain.com'
})
.visualize();

module.exports = everest.config.config;
```

## Everest is ready
Everest is ready to start bundling your code. Happy bundling!

## Contributions
Feel free to contribute with any crazy idea you think can make this project even more useful for the community. Cheers!

-- Manuel Ro

---

Copyright 2017 Manuel Ro

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
