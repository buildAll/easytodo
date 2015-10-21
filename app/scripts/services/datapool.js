'use strict';

/**
 * @ngdoc service
 * @name easyToDoApp.dataPool
 * @description
 * # dataPool
 * Service in the easyToDoApp.
 */
angular.module('easyToDoApp')
  .service('dataPool', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var userData = {
      username:"",
      categroyList:[],
      toDoList:[]
    }

    var toDoItem = {
      content:"",
      status:1//1:ToDo 0:Done
    }

    var categroy = {
      subject:""
    }

    return {
      setUserName:function(name){
         userData.username = name;
      },
      getUserName:function(){
         return userData.username;
      },
      addCategory:function(text){
         categroy.subject = text;
         if(userData.categroyList.length === 0){
          userData.categroyList = new Array();
         }
         console.log("the type is" + typeof userData.categroyList);
         userData.categroyList.push(categroy);
      },
      getCategoryList:function(){
         return userData.categroyList;
      }
    }

  });
