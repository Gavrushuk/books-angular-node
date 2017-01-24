angular.module('blog-app.home')
  .controller('HomeCtrl', ['$scope', '$http', 'BookService', function ($scope, $http, BookService) {
      BookService
        .getAllBooks()
        .then(response => {
          $scope.books = response.data;
        });

  }]);