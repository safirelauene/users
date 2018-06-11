angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('users', {
      url: '/',
      templateUrl: 'app/user/users.html',
      controller: 'UserController',
      controllerAs: 'vm'
    });
}
