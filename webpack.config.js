'use strict';

/**
 * Module dependencies
 */
var path                = require('path'),
    webpack             = require('webpack');

module.exports = {
    entry: './www/js/app.js',
    output: {
        path          : path.join(__dirname, 'www/dist/js'),
        filename      : 'app.bundle.js'
    },

    devServer: {
        inline: true,
        contentBase: './dist/js',
        port: '3100'
    }
}