'use strict';

angular.module('indivisibleks2App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('district2', {
        url: '/district2',
        template: '<district-2></district-2>'
      });
  });
