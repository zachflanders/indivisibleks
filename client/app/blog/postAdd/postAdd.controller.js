'use strict';
(function(){

class PostAddComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('indivisibleks2App')
  .component('postAdd', {
    templateUrl: 'app/blog/postAdd/postAdd.html',
    controller: PostAddComponent
  });

})();
