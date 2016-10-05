module.exports = function($injector) {
  return {
    request: function(config) {
      config.headers = config.headers || {};
      if (localStorage.getItem('auth-token')) {
        config.headers.Authorization = localStorage.getItem('auth-token');
      }
      return config;
    },
    responseError: function(rejection) {
      var $state = $injector.get('$state');

      if (rejection.status === 401 ) {
        $state.go('login');
      }
      return rejection;
    }
  };
};
