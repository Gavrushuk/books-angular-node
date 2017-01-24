angular.module('blog-app.home')
  .controller('CreateCtrl', ['$scope', 'BookService', '$state', function($scope, BookService, $state) {
    $scope.goBack = function() {
      $state.transitionTo('home');
    }
  }]);