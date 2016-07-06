'use strict';

module.exports = [
  '$scope',
  '$stateParams',
  '$state',
  'ReadingListApiService',
  function($scope, $stateParams, $state, ReadingListApiService) {
    $scope.isEditing = false;

    ReadingListApiService.getItem($stateParams.list_id, $stateParams.id)
      .then(function(response) {
        $scope.item = response.data;
      });

    $scope.editItem = function() {
      $scope.isEditing = true;
    };

    $scope.updateItem = function() {
      ReadingListApiService.updateItem($stateParams.list_id, $scope.item)
        .then(
          function(successResponse) {
            $scope.errors = {};
            $scope.isEditing = false;
            $scope.item = successResponse.data;
          },
          function(errorResponse) {
            $scope.errors = errorResponse.data;
          });
    };

    $scope.deleteItem = function(item, index) {
      ReadingListApiService.deleteItem($stateParams.list_id, item.id)
        .then(function(_response) {
          $state.go('items-index', { id: $stateParams.list_id });
        });
    };
  }
];
