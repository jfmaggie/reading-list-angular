'use strict';

module.exports = function($http) {
  var baseUrl = 'http://localhost:3000/api/v1';
  var self = this;

  self.fetchLists = function() {
    return $http({
      method: 'GET',
      url: baseUrl + '/lists.json'
    });
  };
};
