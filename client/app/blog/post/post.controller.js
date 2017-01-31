'use strict';
(function(){

class PostComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('indivisibleks2App')
  .component('post', {
    templateUrl: 'app/blog/post/post.html',
    controller: PostComponent
  });

})();
