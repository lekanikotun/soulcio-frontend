angular.module('soulcioApp.login')

    .factory('LoginService', ['$http', function($http){

        var loginData;

        self.submit = function() {

            $http.post('http://localhost:3000/api/v1/login', self.user )
                .then(function(resp) {

                    $rootScope.userData = resp.data.body.user;
                    //return $location.path('/home');
                    $state.go('app.home');
                })
                .catch(function(error) {
                    console.log('error', error);
                });

        }

        function getData() {

        }

        return {


        }

    }])

    .service('BlankService', [function(){

    }]);