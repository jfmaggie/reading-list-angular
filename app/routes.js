'use strict';

var readingListApp = angular.module('readingList');

readingListApp.config(function($stateProvider, $urlRouterProvider) {
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
});
