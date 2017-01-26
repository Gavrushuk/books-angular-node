angular.module('blog-app.home')
  .controller('HomeCtrl', ['$scope', '$http', 'BookService', function ($scope, $http, BookService) {
    $scope.getBooks = function() {
      BookService
        .getAllBooks()
        .then(response => {
          $scope.books = response.data;
        });
    }

    $scope.getBooks();

    $scope.removeBook = function (id) {
      BookService
        .removeBook(id)
        .then(response =>  $scope.getBooks());
    }

  }]);