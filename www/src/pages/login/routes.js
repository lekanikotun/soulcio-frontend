'use strict';

module.exports =  {
    name: 'menu.login',
    url: '/login',
    parent: 'menu',
    views: {
        'login': {
            templateUrl: 'src/pages/login/template.html',
            controller: 'LoginController',
            controllerAs: 'vm'
        }
    }
}
