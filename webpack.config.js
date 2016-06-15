var path = require('path');

var APP = __dirname + '/app/';

module.exports = {
  context: APP,
  entry: {
    app: './core/bootstrap.js'
  },
  output: {
    path: APP,
    filename: 'bundle.js'
  }
};
