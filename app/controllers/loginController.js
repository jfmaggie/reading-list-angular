'use strict';

module.exports = [
  '$scope',
  '$state',
  '$stateParams',
  'ReadingListApiService',
  function($scope, $state, $stateParams, ReadingListApiService) {
    $scope.message = $stateParams.message;

    $scope.login = function() {
      ReadingListApiService.userLogin($scope.email, $scope.password)
        .then(
          function(successResponse) {
            localStorage.setItem('auth-token', successResponse.data.token);
            $state.go('lists-index');
          },
          function(errorResponse) {
          });
    };

  }];
