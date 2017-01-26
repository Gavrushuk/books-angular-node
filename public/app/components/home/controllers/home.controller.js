angular.module('blog-app.home')
  .controller('HomeCtrl', ['$scope', '$http', 'BookService', function ($scope, $http, BookService) {
    function getBooks() {
      BookService
        .getAllBooks()
        .then(response => {
          $scope.books = response.data;
        });
    }

    getBooks();

    $scope.removeBook = function (id) {
      BookService
        .removeBook(id)
        .then(response => getBooks());
    }

  }]);