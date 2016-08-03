'use strict';

module.exports = [
  '$scope',
  '$state',
  '$stateParams',
  function($scope, $state, $stateParams) {
    $scope.message = $stateParams.message;

    $scope.login = function() {
      console.log("user login");
    };

  }];
