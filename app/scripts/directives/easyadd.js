'use strict';

/**
 * @ngdoc directive
 * @name easyToDoApp.directive:easyAdd
 * @description
 * # easyAdd
 */
angular.module('easyToDoApp')
  .directive('easyAdd', function () {
    return {
      templateUrl:"views/easyadd.html",
      restrict: 'E',
      //scope:true,
      link: function postLink(scope, element, attrs) {
        // scope.doAdd=function(){
        //    console.log(scope.sthToAdd);
        //    scope.sthToAdd = "";
        // };
      }
    };
  });
