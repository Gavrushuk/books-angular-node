angular.module('blog-app.home', [])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '/app/components/home/views/home.html',
        controller: 'HomeCtrl'
      });
  }])