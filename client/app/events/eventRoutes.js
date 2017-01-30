'use strict';

angular.module('indivisibleks2App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('events', {
        url: '/events',
        template: '<events></events>'
      })
      .state('eventAdd', {
        url: '/event/add',
        template: '<event-add></event-add>',
        authenticate: 'editor'
      })
      .state('event', {
        url: '/event/:id',
        template: '<event></event>'
      })
      .state('eventEdit', {
        url: '/event/:id/edit',
        template: '<event-edit></event-edit>'
      });
  });
