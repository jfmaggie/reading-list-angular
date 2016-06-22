'use strict';

module.exports = [
  '$scope',
  '$http',
  'ReadingListApiService',
  function ($scope, $http, ReadingListApiService) {
    ReadingListApiService.fetchLists()
      .then(function(response) {
        $scope.lists = response.data;
      });

    $scope.throwError = function() {
      throw new Error();
    };
  }
];
