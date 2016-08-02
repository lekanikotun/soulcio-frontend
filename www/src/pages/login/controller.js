'use strict';

angular.module('soulcioApp.login')

    .controller('LoginController', [ '$rootScope', '$http', '$state', '$window', function($rootScope, $http, $state, $window) {

        var self = this;




        self.submit = function() {

            if (!$window.sessionStorage.getItem('userData')) {

                $http.post('http://localhost:3000/api/v1/login', self.user )
                    .then(function(resp) {

                        $window.sessionStorage.setItem('userData', JSON.stringify(resp.data.body.user));

                        //return $location.path('/home');

                    })
                    .catch(function(error) {
                        console.log('error', error);
                    });
            }

            $state.go('app.home');

        }


    }]);