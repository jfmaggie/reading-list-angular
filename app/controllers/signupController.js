'use strict';

module.exports = [
  '$scope',
  '$state',
  'ReadingListApiService',
  function($scope, $state, ReadingListApiService) {
    $scope.email = {
      value: '',
      errors: null
    };
    $scope.password = {
      value: '',
      errors: null
    };

    $scope.signup = function() {
      console.log("user signup");
      ReadingListApiService.userSignup($scope.email.value, $scope.password.value)
        .then(
          function(successResponse) {
            $state.go('login', { message: "Successfully signed up. You can log in now!"});
          },
          function(errorResponse){
            $scope.email.errors = errorResponse.data.email;
            $scope.password.errors = errorResponse.data.password;
          });
    };
  }];
