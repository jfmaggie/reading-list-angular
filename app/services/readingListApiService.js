'use strict';

module.exports = function($http) {
  var baseUrl = 'http://localhost:3000/api/v1';
  var defaultHeaders = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  };
  var self = this;

  self.fetchLists = function() {
    return $http({
      method: 'GET',
      url: baseUrl + '/lists.json',
      headers: defaultHeaders
    });
  };

  self.getList = function(id) {
    return $http({
      method: 'GET',
      url: baseUrl + '/lists/' + id + '.json',
      headers: defaultHeaders
    });
  };

  // data: { name: "xxxx" }
  self.createList = function(payload) {
    return $http({
      method: 'POST',
      url: baseUrl + '/lists.json',
      data: { list: payload },
      headers: defaultHeaders
    });
  };

  self.updateList = function(payload) {
    return $http({
      method: 'PUT',
      url: baseUrl + '/lists/' + payload.id + '.json',
      data: { list: { name: payload.name }},
      headers: defaultHeaders
    });
  };

  self.deleteList = function(id) {
    return $http({
      method: 'DELETE',
      url: baseUrl + '/lists/' + id + '.json',
      headers: defaultHeaders
    });
  };

  self.fetchItems = function(id) {
    return $http({
      method: 'GET',
      url: baseUrl + '/lists/' + id + '/items.json',
      headers: defaultHeaders
    });
  };
};
