'use strict';

/**
 * Module dependencies
 */
var path                = require('path'),
    webpack             = require('webpack');

module.exports = {
    entry: './www/js/app.js',
    output: {
        path          : path.join(__dirname, 'www/js'),
        filename      : 'app.bundle.js'
    }
}