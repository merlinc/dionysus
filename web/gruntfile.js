module.exports = function (grunt) {
  grunt.initConfig({
    nodemon: {
      dev: {
        script: 'server.js'
      }
    }
  });

  grunt.task.registerTask('default', 'Default Actions', ['server', 'nodemon']);

  grunt.task.registerTask('server', 'Starting the server', function () {
    // Get the callback
    var done = this.async();

    var path = require('path');
    var app = require('./app');
    var server = app.start(function () {
      done();
    });
  });
};