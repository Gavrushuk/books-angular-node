angular.module('blog-app.home')
  .controller('CreateCtrl', ['$scope', 'BookService', '$state', function($scope, BookService, $state) {
    $scope.createBook = function() {
      BookService
      .createBook(
        {
          author: $scope.bookAuthor,
          title: $scope.bookTitle,
          category: [$scope.bookCategory]
        }
      )
      .then(response => {
        $state.transitionTo("home")
      });
    }  
  }]);