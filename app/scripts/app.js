'use strict';

/**
 * @ngdoc overview
 * @name cloudLaundryApp
 * @description
 * # cloudLaundryApp
 *
 * Main module of the application.
 */
angular
  .module('easyToDoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    //'ngSanitize',
    'ngTouch',
    'ngStorage',
    //'ui.bootstrap'

    // 'angular-datepicker',
    // 'ui.date',
    // 'ngInputDate'
  ])
  .config(["$routeProvider",
    "$httpProvider",function ($routeProvider,$httpProvider) {
    $routeProvider
      .when('/', {
        title:"easyToDo",
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/Login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/Login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/category', {
        templateUrl: 'views/category.html',
        controller: 'CategoryCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

      $httpProvider.defaults.useXDomain = true;
      delete $httpProvider.defaults.headers.common['X-Requested-With'];
  }]).run(['$location', '$rootScope', function($location, $rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.$$route.title;
    });
}]);
