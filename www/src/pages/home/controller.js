'use strict';

angular.module('soulcioApp.home')

    .controller('HomeController', ['$rootScope','$window', function($rootScope, $window) {

        console.log('$rootScope');

        var vm = this;

        if ($window.sessionStorage.getItem('userData')) {
            vm.userData = JSON.parse($window.sessionStorage.getItem('userData'));
        }

    }]);