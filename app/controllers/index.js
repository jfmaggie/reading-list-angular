module.exports = angular.module('readingList.controllers', [])
  .controller('listsController', require('./listsController'))
  .controller('listController', require('./listController'))
  .controller('itemController', require('./itemController'))
  .controller('loginController', require('./loginController'))
  .controller('signupController', require('./signupController'));
