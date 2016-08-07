(function() {

  "use strict";

  var gulp = require("gulp");
  var karma = require("karma").server;
  var isTravis = process.env.TRAVIS || false;

  gulp.task("karma", function(done) {
    karma.start({
      configFile: __dirname + "/karma.conf.js",
      singleRun: isTravis
    }, done);
  });

  gulp.task("default", ["karma"]);

}());
