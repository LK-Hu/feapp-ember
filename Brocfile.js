/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var pickFiles = require('broccoli-static-compiler');
var mergeTrees = require('broccoli-merge-trees');

var app = new EmberApp();
var bootstrapFonts = pickFiles('bower_components/bootstrap/dist/fonts', {
  srcDir: '/',
  files: ['**/*'],
  destDir: '/fonts'
});



// Use `app.import` to add additional libraries to the generated
// output files.

// Tell Broccoli that we want this file to be concatenated with our vendor.css and vendor.js
app.import('bower_components/bootstrap/dist/css/bootstrap.css');
app.import('bower_components/bootstrap/dist/js/bootstrap.js');

// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

var outputTrees = [app.toTree()]

module.exports = mergeTrees([app.toTree(), bootstrapFonts]);
