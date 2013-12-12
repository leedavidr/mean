// Karma configuration
// Generated on Sat Oct 05 2013 22:00:14 GMT+0700 (ICT)

module.exports = function(config) {
    config.set({

        // base path, that will be used to resolve files and exclude
        basePath: '../../',


        // frameworks to use
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            'public/assets/lib/angular/angular.js',
            'public/assets/lib/angular-mocks/angular-mocks.js',
            'public/assets/lib/angular-cookies/angular-cookies.js',
            'public/assets/lib/angular-resource/angular-resource.js',
            'public/assets/lib/angular-bootstrap/ui-bootstrap-tpls.js',
            'public/assets/lib/angular-bootstrap/ui-bootstrap.js',
            'public/assets/lib/angular-ui-utils/modules/route/route.js',
            'public/core/app.js',
            'public/core/config.js',
            'public/core/directives.js',
            'public/core/filters.js',
            'public/core/globalServices.js',
            'public/modules/articles/articlesServices.js',
            'public/modules/articles/articlesController.js',
            'public/modules/home/indexController.js',
            'public/modules/navigation/headerController.js',
            'public/core/init.js',
            'test/karma/unit/**/*.js'
        ],


        // list of files to exclude
        exclude: [

        ],


        // test results reporter to use
        // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
        //reporters: ['progress'],
        reporters: ['progress', 'coverage'],

        // coverage
        preprocessors: {
            // source files, that you wanna generate coverage for
            // do not include tests or libraries
            // (these files will be instrumented by Istanbul)
            //'public/modules/**/*.js': ['coverage'],
            'public/modules/**/*.js': ['coverage']
        },

        coverageReporter: {
            type: 'html',
            dir: 'test/coverage/'
        },

        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_DEBUG,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: ['PhantomJS'],


        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 60000,


        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: true
    });
};