angular.module('blog-app')
  .factory('BookService', ['$http', function($http) {
    return {
      getAllBooks: function() {
        return $http.get('/api/books');
      },

      getById: function(id) {
        return $http.get('/api/books/' + id);
      },

      createBook: function(payload) {
        return $http.post('/api/books', payload);
      }
    }
  }]);