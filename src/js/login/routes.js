angular.module('soulcioApp.login')
    .config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('menu', {
                url: '',
                templateUrl: 'templates/base/menu.html',
                abstract: true
            })
            .state('menu.login', {
                url: '/login',
                views: {
                    'login': {
                        templateUrl: 'templates/login.html'
                    }
                }
            })

    });
/*

module.exports = function(parent) {
   return {
       name: 'menu.login',
       parent: parent,
       template: 'templates/login.html'
   }
}*/
