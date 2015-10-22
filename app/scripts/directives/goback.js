'use strict';

/**
 * @ngdoc directive
 * @name easyToDoApp.directive:goback
 * @description
 * # goback
 */
angular.module('easyToDoApp')
  .directive('goback', function () {
    return {
      template: '<button class="btn btn-default" ng-click="goback()">back</button>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        //element.text('this is the goback directive');
      }
    };
  });
