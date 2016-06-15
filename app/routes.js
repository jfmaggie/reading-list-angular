'use strict';

module.exports = function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    // States and nested views go here;
    .state('home', {
      url: '/',
      templateUrl: 'views/home.html'
    })
    .state('lists', {
      url: '/lists',
      templateUrl: 'views/lists.html',
      controller: 'listsController'
    });
};
