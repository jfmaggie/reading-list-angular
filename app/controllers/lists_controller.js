'use strict';

var app = angular.module('readingList');

app.controller('listsController',['$scope',
  function ($scope) {
    $scope.lists = [
      {name: 'list 1'},
      {name: 'list 2'},
      {name: 'list 3'},
      {name: 'list 4'},
      {name: 'list 5'}
    ];
  }
]);
