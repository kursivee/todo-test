'use strict';
(function() {
  angular
    .module('app')
    .service('MyService', MyService);

  function MyService($http) {

    var get = function() {
      return $http.get('http://fakeaddress.com/todos');
    }

    var add = function(todo) {
      return $http({ url: 'http://fakeaddress.com/todos', method: "POST", data: { todo : todo } });
    }
  }
})();
