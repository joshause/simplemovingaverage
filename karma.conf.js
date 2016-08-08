// Karma configuration

module.exports = function(config) {
  config.set({

    basePath: '',

    frameworks: ['browserify', 'jasmine'],

    files: [
      'simplemovingaverage.js',
      'test/*.js'
    ],

    preprocessors: {
      'simplemovingaverage.js': ['browserify'],
      'test/*.js': ['browserify']
    },

    browserify: {
      debug: true,
      transform: [ 'babelify' ]
    },

    reporters: ['spec'],

    port: 9876,

    colors: true,

    autoWatch: true,

    browsers: ['PhantomJS'],

    plugins : [
      'karma-browserify',
      'karma-jasmine',
      'karma-spec-reporter',
      'karma-phantomjs-launcher',
    ],

    singleRun: false

  });
};
