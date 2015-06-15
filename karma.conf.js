// Karma configuration

module.exports = function(config) {
  config.set({

    basePath: '',

    frameworks: ['jasmine'],

    files: [
      'js/simplemovingaverage.js',
      'test/*.js'
    ],

    reporters: ['spec'],

    port: 9876,

    colors: true,

    autoWatch: true,

    browsers: ['PhantomJS'],

    plugins : [
        'karma-jasmine',
        'karma-spec-reporter',
        'karma-phantomjs-launcher',
    ],

    singleRun: false

  });
};
