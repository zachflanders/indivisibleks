'use strict';

angular.module('indivisibleks2App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('statewide', {
        url: '/statewide',
        template: '<districts></districts>'
      });
  });
