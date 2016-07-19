'use strict';

var controllers = require('./controllers/index');
var services = require('./services/index');

// Declare the app level module and dependencies
module.exports = angular.module('readingList', ['ui.router', controllers.name, services.name])
  .config(require('./routes'))
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
