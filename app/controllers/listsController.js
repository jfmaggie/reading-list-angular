'use strict';

module.exports = [
  '$scope',
  'ReadingListApiService',
  function ($scope, ReadingListApiService) {
    ReadingListApiService.fetchLists()
      .then(function(response) {
        $scope.lists = response.data;
      });

    // default values for new list form
    $scope.newListForm = { name: '' };
    $scope.createList = function() {
      ReadingListApiService.createList($scope.newListForm)
        .then(function(response) {
          $scope.lists.push(response.data);
          $scope.newListForm.name = ''; // resetting form to be revised
        });
    };

    $scope.deleteList = function(list, index) {
      ReadingListApiService.deleteList(list.id)
        .then(function(_response) {
          $scope.lists.splice(index, 1);
        });
    };
  }
];
