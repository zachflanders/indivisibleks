'use strict';

angular.module('indivisibleks2App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('districts', {
        url: '/districts',
        template: '<districts></districts>'
      });
  });
