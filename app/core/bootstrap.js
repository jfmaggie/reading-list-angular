'use strict';
require('./vendor')();

var appModule = require('../app.js');

angular.element(document).ready(function() {
  angular.bootstrap(document.body, [appModule.name]);
});
