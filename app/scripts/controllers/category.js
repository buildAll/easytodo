'use strict';

/**
 * @ngdoc function
 * @name easyToDoApp.controller:CategoryCtrl
 * @description
 * # CategoryCtrl
 * Controller of the easyToDoApp
 */
angular.module('easyToDoApp')
  .controller('CategoryCtrl', function ($scope,dataPool,$location) {
     //private tool function
     function updateCategoryList(){
       $scope.categroyList = dataPool.getCategoryList();
     }

     //output to scope function
     function addNewCategory(){
       dataPool.addCategory($scope.sthToAdd);
       $scope.sthToAdd= "";
       updateCategoryList();
     }


     function showToDoList(index){
       dataPool.setCurCategoryIndex(index);
       $location.path("/list");
     }

     //bind scope function
     $scope.doAdd = addNewCategory;
     $scope.showToDoList = showToDoList;

     //init
     updateCategoryList();
  });
