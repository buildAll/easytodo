'use strict';

/**
 * @ngdoc function
 * @name easyToDoApp.controller:CategoryCtrl
 * @description
 * # CategoryCtrl
 * Controller of the easyToDoApp
 */
angular.module('easyToDoApp')
  .controller('CategoryCtrl', function ($scope,dataPool) {
     console.log(dataPool.getUserName());
     dataPool.addCategory("hello world");
     dataPool.addCategory("hello1 world");
     console.log(dataPool.getCategoryList());
     $scope.categroyList = dataPool.getCategoryList();
  });
