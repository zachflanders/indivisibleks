'use strict';

angular.module('indivisibleks2App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('blog', {
        url: '/blog',
        template: '<blog></blog>'
      })
      .state('postAdd', {
        url: '/post/add',
        template: '<post-add></post-add>'
      })
      .state('post', {
        url: '/post/:id',
        template: '<post></post>'
      })
      .state('postEdit', {
        url: '/post/:id/edit',
        template: '<post-edit></post-edit>'
      });
  });
