angular.module('blog-app', [
  'ui.router',
  'ngMessages',

  // Components
  'blog-app.home'
  
  ])
  .controller('MainCtrl', ['$scope', function() {
    var vm = this;

    vm.name = 'Illa'
  }])

  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
  }])