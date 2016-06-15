'use strict';

module.exports = ['$scope',
  function ($scope) {
    $scope.lists = [
      {name: 'list 1'},
      {name: 'list 2'},
      {name: 'list 3'},
      {name: 'list 4'},
      {name: 'list 5'}
    ];

    $scope.throwError = function() {
      throw new Error();
    };
  }
];
