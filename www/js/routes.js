angular.module('soulcioApp.routes')

    .config(function ($stateProvider, $urlRouterProvider) {

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider

            .state('app', {
                url: '',
                templateUrl: 'templates/base/tabs.html',
                abstract: true
            })

            .state('app.home', {
                url: '/home',
                views: {
                    'home': {
                        templateUrl: 'templates/home.html'
                    }
                }
            })

            .state('app.account', {
                url: '/account',
                views: {
                    'account': {
                        templateUrl: 'templates/account.html'
                    }
                }
            })

            .state('app.chats', {
                url: '/chats',
                views: {
                    'chats': {
                        templateUrl: 'templates/chats.html'
                    }
                }
            })

            .state('app.settings', {
                url: '/settings',
                views: {
                    'settings': {
                        templateUrl: 'templates/settings.html'
                    }
                }
            })

            .state('menu', {
                url: '',
                templateUrl: 'templates/base/menu.html',
                abstract: true
            })

            .state('menu.join', {
                url: '/join',
                views: {
                    'join': {
                        templateUrl: 'templates/join.html'
                    }
                }
            });

        $urlRouterProvider.otherwise('/home')


    });