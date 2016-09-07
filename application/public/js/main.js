'use strict';

/**
 * @ngdoc overview
 * @name obmApp
 * @description
 * # Online Benefits Management Express/Angular application
 *
 * Main module of the application.
 */


var app = angular.module('hack-app', [
    'ui.router'
]);

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider',
    function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {

        $urlRouterProvider.otherwise( '/api' );

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/html/',
                controller: 'controller1',
                controllerAs: 'controller1',
                resolve: {
                    dependency: ["srv1", function (srv1) {
                        console.log('+++++++++++++++++++++++++')
                        return srv1;
                    }]
                }
            })


        $locationProvider.html5Mode(true);

    }]);