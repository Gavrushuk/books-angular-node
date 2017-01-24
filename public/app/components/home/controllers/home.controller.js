angular.module('blog-app.home')
  .controller('HomeCtrl', ['$scope', '$http', 'BookService', function ($scope, $http, BookService) {

    BookService
      .getById('588724a9bb7a9346e66ca403')
      .then(res => {
        console.log(res.data);
      });

    BookService
      .createBook({
        title: 'For Serhiy',
        author: "Serhiy",
        categories: ['hello']
      }).then(res => {
        console.log(res);

        BookService
          .getAllBooks()
          .then(response => {
            $scope.books = response.data;
            console.log(response);
          });

      })
  }]);