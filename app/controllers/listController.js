'use strict';

module.exports = [
  '$scope',
  '$stateParams',
  '$state',
  'ReadingListApiService',
  function($scope, $stateParams, $state, ReadingListApiService) {
    $scope.isEditing = false;

    ReadingListApiService.getList($stateParams.id)
      .then(function(response) {
        $scope.list = response.data;
        ReadingListApiService.fetchItems($scope.list.id)
          .then(function(response) {
            $scope.items = response.data;
          });
      });

    $scope.editList = function() {
      $scope.isEditing = true;
    };

    $scope.updateList = function() {
      ReadingListApiService.updateList($scope.list)
        .then(
          function(successResponse) {
            $scope.errors = {};
            $scope.isEditing = false;
            $scope.list = successResponse.data;
          },
          function(errorResponse) {
            $scope.errors = errorResponse.data;
          });
    };

    $scope.deleteList = function() {
      ReadingListApiService.deleteList($scope.list.id)
        .then(function(_response) {
          $state.go('lists-index');
        });
    };

    $scope.newItemForm = { name: '' };
    $scope.createItem = function() {
      ReadingListApiService.createItem($scope.list.id, $scope.newItemForm)
        .then(
          function(successResponse) {
            $scope.newItemForm.errors = {};
            $scope.items.push(successResponse.data);
            $scope.newItemForm.name = '';
          },
          function(errorResponse) {
            $scope.newItemForm.errors = errorResponse.data;
          });
    };
  }
];
