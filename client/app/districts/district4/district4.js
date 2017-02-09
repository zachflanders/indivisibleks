'use strict';

angular.module('indivisibleks2App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('district4', {
        url: '/district4',
        template: '<district-4></district-4>'
      });
  });
