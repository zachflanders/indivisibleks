'use strict';

angular.module('indivisibleks2App', [
  'indivisibleks2App.auth',
  'indivisibleks2App.admin',
  'indivisibleks2App.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'validation.match',
  'ui.calendar',
  'angularUtils.directives.dirPagination',
  'ae-datetimepicker',
  'textAngular'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
