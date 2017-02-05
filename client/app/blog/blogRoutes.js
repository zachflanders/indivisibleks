'use strict';

angular.module('indivisibleks2App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('updates', {
        url: '/updates',
        template: '<blog></blog>'
      })
      .state('postAdd', {
        url: '/post/add',
        template: '<post-add></post-add>',
        authenticate: 'editor'
      })
      .state('post', {
        url: '/post/:id',
        template: '<post></post>'
      })
      .state('postEdit', {
        url: '/post/:id/edit',
        template: '<post-edit></post-edit>',
        authenticate: 'editor'
      });
  });
