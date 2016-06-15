'use strict';

var controllers = require('./controllers/index');

// Declare the app level module and dependencies
module.exports = angular.module('readingList', ['ui.router', controllers.name])
  .config(require('./routes'));
