/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	// soulcioApp App
	// angular.module is a global place for creating, registering and retrieving Angular modules
	// 'soulcioApp' is the name of this angular module
	// the 2nd parameter is an array of 'requires'
	// 'soulcioApp.services' is found in services.js
	// 'soulcioApp.controllers' is found in controllers.js

	'use strict';

	__webpack_require__(1);

	__webpack_require__(2);
	__webpack_require__(4);
	__webpack_require__(5);
	__webpack_require__(6);
	__webpack_require__(7);


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


/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	module.exports = (function() {

	    //create modules
	    angular.module('soulcioApp.home', []);
	    angular.module('soulcioApp.account', []);
	    angular.module('soulcioApp.chat', []);
	    angular.module('soulcioApp.join', []);
	    angular.module('soulcioApp.login', []);
	    angular.module('soulcioApp.settings', []);

	    angular.module('soulcioApp.directives', []);
	    angular.module('soulcioApp.routes', []);

	}());

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./routes.js": 3
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 2;


/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	module.exports =  {
	    name: 'menu.login',
	    url: '/login',
	    parent: 'menu',
	    views: {
	        'login': {
	            templateUrl: 'templates/login.html'
	        }
	    }
	}


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var loginRoute = __webpack_require__(3);

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


	            .state(loginRoute)

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

/***/ },
/* 5 */
/***/ function(module, exports) {

	angular.module('soulcioApp.controllers', [])
	  
	.controller('meCtrl', function($scope) {

	})
	   
	.controller('messagesCtrl', function($scope) {

	})
	   
	.controller('settingsCtrl', function($scope) {

	})
	         
	.controller('theRichMindsCtrl', function($scope) {

	})
	   
	.controller('signupCtrl', function($scope) {

	})
	   
	.controller('loginCtrl', function($scope) {

	})
	 

/***/ },
/* 6 */
/***/ function(module, exports) {

	angular.module('soulcioApp.directives', [])

	.directive('blankDirective', [function(){

	}]);



/***/ },
/* 7 */
/***/ function(module, exports) {

	angular.module('soulcioApp.services', [])

	.factory('BlankFactory', [function(){

	}])

	.service('BlankService', [function(){

	}]);



/***/ }
/******/ ]);