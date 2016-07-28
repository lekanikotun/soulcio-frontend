// soulcioApp App
// angular.module is a global place for creating, registering and retrieving Angular modules
// 'soulcioApp' is the name of this angular module
// the 2nd parameter is an array of 'requires'
// 'soulcioApp.services' is found in services.js
// 'soulcioApp.controllers' is found in controllers.js

'use strict';

require('./app.modules.js');
require('../src/routes/routes.js');
//require.context("../src", true, /^\.\/.*\.js$/);

window.soulcioApp = angular.module('soulcioApp', [
    'ionic',
    'soulcioApp.home',
    'soulcioApp.account',
    'soulcioApp.chat',
    'soulcioApp.join',
    'soulcioApp.login',
    'soulcioApp.settings',
    'soulcioApp.directives',
    'soulcioApp.routes'
])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
});
