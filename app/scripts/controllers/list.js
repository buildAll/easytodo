'use strict';

/**
 * @ngdoc function
 * @name easyToDoApp.controller:ListCtrl
 * @description
 * # ListCtrl
 * Controller of the easyToDoApp
 */
angular.module('easyToDoApp')
  .controller('ListCtrl', function ($scope,$location,dataPool) {
     if(dataPool.getCurCategoryName().length === 0){
        $location.path('/');
     }
     //private tool function
     function updateTodoList(){
      $scope.toDoList = dataPool.getTodoListByCategory();
     }
     //output to scope function
     function addNewTodoItem(){
       dataPool.addTodoItem($scope.sthToAdd);
       updateTodoList();
       $scope.sthToAdd = "";
     }

     function goback(){
      $location.path("/category");
     }

     //bind scope data
     $scope.curCategory = dataPool.getCurCategoryName();
     //bind scope function
     $scope.doAdd = addNewTodoItem;
     $scope.goback = goback;

     //init
     updateTodoList();
  });
