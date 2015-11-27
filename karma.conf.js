// Karma configuration
// Generated on Thu Nov 19 2015 23:48:26 GMT-0800 (PST)

module.exports = function(config) {
  config.set({
    basePath: 'app',
    frameworks: ['jasmine', 'requirejs'],
    files: [
        'paths.js',
        'test-main.js',
        {pattern: '../bower_components/angular/angular.js', included: true},
        {pattern: '../bower_components/angular-mocks/angular-mocks.js', included: true},
        {pattern: '../bower_components/angular-resource/angular-resource.js', included: true},
        {pattern: '../bower_components/angular-route/angular-route.js', included: true},
        {pattern: 'modules/**/*.js', included: false},
        {pattern: 'modules/**/services/*.js', included: false},
        {pattern: 'modules/**/*.spec.js', included: false},
        {pattern: 'modules/**/services/*.spec.js', included: false}
    ],
    exclude: [
        'main.js'
    ],
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_DEBUG,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false,
    concurrency: Infinity
  })
}
