'use strict';
(function() {
  angular
    .module('app')
    .controller('MyController', MyController);

  function MyController($scope, MyService) {
    var vm = this;
    vm.todoTask = '';
    vm.todoTitle = '';
    vm.todoList = {};

    vm.addTodo = function() {
      var todo = {};
      todo.task = vm.todoTask;
      todo.amIDone = false;
      todo.id = Math.random() * 100000;
      MyService.add(todo);
      vm.todoList.push(todo);
    }

    vm.filterTodos = function() {
      var filter = [];
      angular.forEach(vm.todoList, function(value, key) {
        if(value.amIDone) {
          filter.push(vm.todoList);
        }
      });
      vm.todoList = filter;
    }

    vm.completeTodo = function(todo) {
      todo.amIDone = true;
    }

    activate();
    function activate() {
      vm.todoList = [];
      MyService.get().then(function(x) {
        angular.forEach(x, function(value, key) {
          vm.todoList.push(value);
        });
      });
    }

    // For displaying errors when a service call fails
    function showAlert() {
      alert('Error');
    }
  }
})();
