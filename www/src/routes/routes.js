'use strict';

//controllers
require('../pages/login/controller');
require('../pages/join/controller');
require('../pages/home/controller');
require('../pages/chat/controller');
require('../pages/account/controller');
require('../pages/settings/controller');

//Routes
var loginRoute = require('../pages/login/routes');
var joinRoute = require('../pages/join/routes');
var homeRoute = require('../pages/home/routes');
var chatRoute = require('../pages/chat/routes');
var accountRoute = require('../pages/account/routes');
var settingsRoute = require('../pages/settings/routes');

angular.module('soulcioApp.routes')

    .config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider

            .state('app', {
                url: '',
                templateUrl: 'src/templates/base/tabs.html',
                abstract: true
            })
            .state('menu', {
                url: '',
                templateUrl: 'src/templates/base/menu.html',
                abstract: true
            })
            .state(homeRoute)
            .state(accountRoute)
            .state(chatRoute)
            .state(settingsRoute)
            .state(loginRoute)
            .state(joinRoute)

        $urlRouterProvider.otherwise('/home')

    });