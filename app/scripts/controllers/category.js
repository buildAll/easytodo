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

     //init function
     function init(){
       if(dataPool.getUserName().length === 0){
         $location.path('/');
       }
       updateCategoryList();
     }

     //output to scope function
     function addNewCategory(){
       dataPool.addCategory($scope.sthToAdd);
       $scope.sthToAdd= "";
       updateCategoryList();
     }

     function goback(){
       $location.path('/');
     }


     function showToDoList(index){
       dataPool.setCurCategoryIndex(index);
       $location.path("/list");
     }


     function deleteCat(index,e){
       e.stopPropagation();
       console.log(index);
       if(confirm("are u sure?")){
        dataPool.deleteCategory(index);
        updateCategoryList();
       }
     }

     //bind data
     $scope.user = dataPool.getUserName();
     //bind scope function
     $scope.doAdd = addNewCategory;
     $scope.showToDoList = showToDoList;
     $scope.goback = goback;
     $scope.deleteCategory = deleteCat;

     //init
     init();
  });
