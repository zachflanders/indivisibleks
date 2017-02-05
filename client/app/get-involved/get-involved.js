'use strict';

angular.module('indivisibleks2App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('get-involved', {
        url: '/get-involved',
        template: '<get-involved></get-involved>'
      });
  });
