'use strict';

var controllers = require('./controllers/index');
var services = require('./services/index');

// Declare the app level module and dependencies
module.exports = angular.module('readingList', ['ui.router', controllers.name, services.name])
  .config(require('./routes'));
