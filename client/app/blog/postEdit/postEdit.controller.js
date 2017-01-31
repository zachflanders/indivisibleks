'use strict';
(function(){

class PostEditComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('indivisibleks2App')
  .component('postEdit', {
    templateUrl: 'app/blog/postEdit/postEdit.html',
    controller: PostEditComponent
  });

})();
