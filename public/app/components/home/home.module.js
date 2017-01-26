angular.module('blog-app.home', [])
  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '/app/components/home/views/home.html',
        controller: 'HomeCtrl'
      })
      .state('create', {
        url: '/create',
        templateUrl: '/app/components/home/views/create.html',
        controller: 'CreateCtrl'
      })
      .state('edit', {
        url: '/edit/:id',
        templateUrl: '/app/components/home/views/edit.html',
        controller: 'EditCtrl'
      })
  }])