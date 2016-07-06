'use strict';

module.exports = function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    // States and nested views go here;
    .state('home', {
      url: '/',
      templateUrl: 'views/home.html'
    })
    .state('lists-index', {
      url: '/lists',
      templateUrl: 'views/lists.html',
      controller: 'listsController'
    })
    .state('lists-show', {
      url: '/lists/:id',
      templateUrl: 'views/list.html',
      controller: 'listController'
    })
    .state('items-index', {
      url: '/lists/:id/items',
      templateUrl: 'views/list.html',
      controller: 'listController'
    })
    .state('items-show', {
      url: '/lists/:list_id/items/:id',
      templateUrl: 'views/item.html',
      controller: 'itemController'
    });
};
