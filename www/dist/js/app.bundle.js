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

	'use strict';

	//controllers
	__webpack_require__(3);
	__webpack_require__(4);
	__webpack_require__(5);
	__webpack_require__(6);
	__webpack_require__(7);
	__webpack_require__(8);

	//Routes
	var loginRoute = __webpack_require__(9);
	var joinRoute = __webpack_require__(10);
	var homeRoute = __webpack_require__(11);
	var chatRoute = __webpack_require__(12);
	var accountRoute = __webpack_require__(13);
	var settingsRoute = __webpack_require__(14);

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

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	angular.module('soulcioApp.login')

	    .controller('LoginController', function($scope) {

	    });

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	angular.module('soulcioApp.join')

	    .controller('JoinController', function($scope) {

	    });

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	angular.module('soulcioApp.home')

	    .controller('HomeController', function($scope) {

	    });

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	angular.module('soulcioApp.chat')

	    .controller('ChatController', function($scope) {

	    });

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	angular.module('soulcioApp.account')

	    .controller('loginController', function($scope) {

	    });

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	angular.module('soulcioApp.settings')

	    .controller('SettingsController', function($scope) {

	    });

/***/ },
/* 9 */
/***/ function(module, exports) {

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


/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';

	module.exports =  {
	    name: 'menu.join',
	    url: '/join',
	    parent: 'menu',
	    views: {
	        'join': {
	            templateUrl: 'src/pages/join/template.html'
	        }
	    }
	}


/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';

	module.exports =  {
	    name: 'app.home',
	    url: '/home',
	    parent: 'app',
	    views: {
	        'home': {
	            templateUrl: 'src/pages/home/template.html'
	        }
	    }
	}


/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';

	module.exports =  {
	    name: 'app.chat',
	    url: '/chat',
	    parent: 'app',
	    views: {
	        'chat': {
	            templateUrl: 'src/pages/chat/template.html'
	        }
	    }
	}


/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';

	module.exports =  {
	    name: 'app.account',
	    url: '/account',
	    parent: 'app',
	    views: {
	        'account': {
	            templateUrl: 'src/pages/account/template.html'
	        }
	    }
	}


/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';

	module.exports =  {
	    name: 'app.settings',
	    url: '/settings',
	    parent: 'app',
	    views: {
	        'settings': {
	            templateUrl: 'src/pages/settings/template.html'
	        }
	    }
	}


/***/ }
/******/ ]);