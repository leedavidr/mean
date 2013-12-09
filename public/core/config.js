//Setting up route
angular.module('mean').config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/articles', {
            templateUrl: 'modules/articles/list.html'
        }).
        when('/articles/create', {
            templateUrl: 'modules/articles/create.html'
        }).
        when('/articles/:articleId/edit', {
            templateUrl: 'modules/articles/edit.html'
        }).
        when('/articles/:articleId', {
            templateUrl: 'modules/articles/view.html'
        }).
        when('/', {
            templateUrl: 'modules/home/index.html'
        }).
        otherwise({
            redirectTo: '/'
        });
    }
]);

//Setting HTML5 Location Mode
angular.module('mean').config(['$locationProvider',
    function($locationProvider) {
        $locationProvider.hashPrefix("!");
    }
]);