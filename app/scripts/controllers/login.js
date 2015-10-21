'use strict';

/**
 * @ngdoc function
 * @name easyToDoApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the easyToDoApp
 */
angular.module('easyToDoApp')
  .controller('LoginCtrl', function ($scope,$location,dataPool) {
     $scope.login =function(){
       console.log($scope.username);
       dataPool.setUserName($scope.username);
       $location.path("/category");
     }
  });
