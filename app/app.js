'use strict';

var controllers = require('./controllers/index');
var services = require('./services/index');
var factories = require('./factories/index');

// Declare the app level module and dependencies
module.exports = angular.module('readingList', ['ui.router', controllers.name, services.name, factories.name])
  .config(require('./routes'))
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  })
  .run(function($state, $timeout, $rootScope) {
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
      console.log('$stateChangeStart to ' + toState.to + '-fired when the transition begins. toState, toParams : \n', toState, toParams);
    });

    $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams) {
      console.log('$stateChangeError - fired when an error occurs during transition.');
    });

    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
      console.log('$stateChangeSuccess to ' + toState.name + '-fired once the state transition is complete.');
    });

    $rootScope.$on('$viewContentLoaded', function(event) {
      console.log('$viewContentLoaded - fired after dom rendered', event);
    });

    $rootScope.$on('$stateNotFound', function(event, unfoundState, fromState, fromParams) {
      console.log('$stateNotFound ' + unfoundState.to + ' - fired when a state cannot be found by its name.');
      console.log(unfoundState, fromState, fromParams);
    });

  });
