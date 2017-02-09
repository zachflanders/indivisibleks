'use strict';

angular.module('indivisibleks2App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('district3', {
        url: '/district3',
        template: '<district-3></district-3>'
      });
  });
