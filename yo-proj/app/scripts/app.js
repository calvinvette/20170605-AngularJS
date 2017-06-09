'use strict';

/**
 * @ngdoc overview
 * @name yoProjApp
 * @description
 * # yoProjApp
 *
 * Main module of the application.
 */
angular
  .module('yoProjApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
