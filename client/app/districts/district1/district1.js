'use strict';

angular.module('indivisibleks2App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('district1', {
        url: '/district1',
        template: '<district-1></district-1>'
      });
  });
