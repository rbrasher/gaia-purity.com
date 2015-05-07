'use strict';

var app = angular.module('Site', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/home.html',
            controller: 'PageCtrl'
        })
        .when('/products', {
            templateUrl: 'partials/products.html',
            controller: 'PageCtrl'
        })
        .when('/contact', {
            templateUrl: 'partials/index.html',
            controller: 'PageCtrl'
        })
        .when('/terms', {
            templateUrl: 'partials/terms.html',
            controller: 'PageCtrl'
        })
        .when('/privacy', {
            templateUrl: 'partials/privacy.html',
            controller: 'PageCtrl'
        })
        .otherwise('/404', {
            templateUrl: 'partials/404.html'
        });
}]);

app.controller('PageCtrl', function() {
    //console.log('Page Controller reporting for duty');
});
