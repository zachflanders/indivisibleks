'use strict';
(function(){

class PostAddComponent {
  constructor($http) {
    var vm = this;
    vm.post = {};
    vm.post.status = '';
    vm.post.title = '';
    vm.post.publish = '';
    vm.post.body = '';
    this.addPost = function(){
      $http.post('api/posts/', vm.post );
      toastr.success('Added Post ' + vm.post.title);
      vm.post = {};
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    };
  }
}

angular.module('indivisibleks2App')
  .component('postAdd', {
    templateUrl: 'app/blog/postAdd/postAdd.html',
    controller: PostAddComponent
  });

})();
