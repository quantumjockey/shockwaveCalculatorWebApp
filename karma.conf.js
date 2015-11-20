// Karma configuration
// Generated on Thu Nov 19 2015 23:48:26 GMT-0800 (PST)

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', 'requirejs'],
    files: [
        'app/paths.js',
        'app/test-main.js',
        'bower_components/angular/angular.js',
        'bower_components/angular-mocks/angular-mocks.js',
        'bower_components/angular-resource/angular-resource.js',
        'bower_components/angular-route/angular-route.js',
        {pattern: 'modules/**/*.js', included: false},
        {pattern: 'modules/**/services/*.js', included: false},
        {pattern: 'modules/**/*.spec.js', included: false},
        {pattern: 'modules/**/services/*.spec.js', included: false}
    ],
    exclude: [
        'app/main.js'
    ],
    preprocessors: {
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_DEBUG,
    autoWatch: true,
    browsers: ['Chrome', 'PhantomJS'],
    singleRun: false,
    concurrency: Infinity
  })
}
