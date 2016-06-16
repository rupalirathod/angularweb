angular
  .module('myApp')
  .factory('Cards', ['$http', function($http) {
    return {
      get: function() {
        return $http.get('api/cards.json').then(function(response) {
          return response.data;
        });
      }
    };
  }])