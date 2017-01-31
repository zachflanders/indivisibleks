'use strict';
(function(){

class BlogComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('indivisibleks2App')
  .component('blog', {
    templateUrl: 'app/blog/blog/blog.html',
    controller: BlogComponent
  });

})();
