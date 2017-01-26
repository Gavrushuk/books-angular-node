angular.module('blog-app.home')
  .controller('EditCtrl', ['$scope', 'BookService', '$state', '$stateParams',
   function($scope, BookService, $state, $stateParams) {
    BookService.getById($stateParams.id)
      .then(res => {
        $scope.book = res.data;
        $scope.bookTitle = $scope.book.title;
        $scope.bookAuthor = $scope.book.author;
        $scope.bookCategory = $scope.book.category && $scope.book.category[0];
      });
    
    $scope.editBook = function() {
      BookService
      .editBook(
        $scope.book._id,
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