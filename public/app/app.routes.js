angular.module('app.routes', ['ngRoute'])
.config(function($routeProvider,$locationProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'app/views/landing.html',
        controller: 'LandingController',
        controllerAs: 'Landing'
    });
});