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

     /** go back to login page if data invalid**/
     if(dataPool.getCurCategoryName().length === 0){
        $location.path('/');
     }
     /****** above end *******/


     /**private tool function**/
     function updateTodoList(){
      $scope.toDoList = dataPool.getTodoListByCategory();
     }
     /****** above end *******/



     /**output to scope function**/
     function addNewTodoItem(){
       dataPool.addTodoItem($scope.sthToAdd);
       updateTodoList();
       $scope.sthToAdd = "";
     }

     function toggleStatus(i,e){
       var index = $scope.toDoList[i].index;
       var st = $scope.toDoList[i].status==0?1:0;
       e.stopPropagation();
       dataPool.setTodoItemStatus(index,st);
     }

     function deleteItem(i,e){
       var index = $scope.toDoList[i].index;
       var st = -1;
       e.stopPropagation();
       dataPool.setTodoItemStatus(index,st);
       updateTodoList();
     }

     function goback(){
      $location.path("/category");
     }
     /****** above end *******/

     /**bind scope data**/
     $scope.curCategory = dataPool.getCurCategoryName();
     /****** above end *******/

     /**bind scope function**/
     $scope.doAdd = addNewTodoItem;
     $scope.goback = goback;
     $scope.toggleStatus = toggleStatus;
     $scope.deleteItem = deleteItem;
     /****** above end *******/

     /**init**/
     updateTodoList();
     /****** above end *******/
  });
