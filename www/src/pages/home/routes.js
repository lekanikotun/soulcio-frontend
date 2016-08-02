'use strict';

module.exports =  {
    name: 'app.home',
    url: '/home',
    parent: 'app',
    views: {
        'home': {
            templateUrl: 'src/pages/home/template.html',
            controller: 'HomeController',
            controllerAs: 'vm'
        }
    }
}
