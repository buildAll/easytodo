'use strict';

/**
 * @ngdoc service
 * @name easyToDoApp.dataPool
 * @description
 * # dataPool
 * Service in the easyToDoApp.
 */
angular.module('easyToDoApp')
  .service('dataPool', function ($localStorage) {
    //var _userData = {
    //  username:"",
    //  categroyList:[],
    //  toDoList:[]
    //}

    var _userData;
    var _curCategoryIndex;

    function resetUserData(name){
    }

    function UserData(user){
      this.username = user;
      this.categroyList = [];
      this.toDoList = [];
    }

    var ToDoItem = function(desc,categroyId){
       this.action = desc;
       this.id = categroyId;
       this.status = 1;//1:ToDo 0:Done
    }

    var Categroy = function(text){
      this.subject = text;
      this.display = true;
    }

    function writeLocalData(){
      var key = "easyToDo"+_userData.username;
      $localStorage[key]=_userData;

    }

    function readLocalData(){
       var key = "easyToDo"+_userData.username;
       if($localStorage[key]){
         _userData = $localStorage[key];
       }else{
         resetUserData();
       }
    }


    return {
      setUserName:function(name){
         _userData = new UserData(name);
         readLocalData(name);
      },
      getUserName:function(){
         return _userData?_userData.username:"";
      },
      addCategory:function(text){
         var item = new Categroy(text);
         _userData.categroyList.push(item);
         writeLocalData();
      },
      getCategoryList:function(){
         return _userData.categroyList;
      },
      setCurCategoryIndex:function(index){
         _curCategoryIndex = index;
         writeLocalData();
      },
      getCurCategoryIndex:function(){
         return _curCategoryIndex;
      },
      getCurCategoryName:function(){
         return _userData?_userData.categroyList[_curCategoryIndex].subject: "";
      },
      addTodoItem:function(item){
         var newTodo = new ToDoItem(item,_curCategoryIndex);
           _userData.toDoList.push(newTodo);
           writeLocalData();
      },
      getTodoListByCategory:function(){
        var arr = [];
        if(_userData){
          for(var i=0;i<_userData.toDoList.length;i++){
             if(_userData.toDoList[i].id === _curCategoryIndex){
                arr.push(_userData.toDoList[i]);
             }
          }
        }
        return arr;
      },
      getTodoListForAll:function(){
        return _userData.toDoList;
      },
      deleteCategory:function(index){
        _userData.categroyList[index].display = false;
        writeLocalData();
      }
    }
  });
