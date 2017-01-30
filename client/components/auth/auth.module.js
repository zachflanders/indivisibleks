'use strict';

angular.module('indivisibleks2App.auth', [
  'indivisibleks2App.constants',
  'indivisibleks2App.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
