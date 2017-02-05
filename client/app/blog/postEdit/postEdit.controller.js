'use strict';
(function(){

class PostEditComponent {
  constructor($http, $stateParams) {
    var vm = this;
    var id = $stateParams.id;
    $http.get('/api/posts/'+id).then(response => {
      vm.post = response.data;



    });
    this.editPost = function(){
      $http.put('api/posts/' + id, vm.post );
      toastr.success('Edited Post ' + vm.post.title);
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    };

  }
}

angular.module('indivisibleks2App')
  .component('postEdit', {
    templateUrl: 'app/blog/postEdit/postEdit.html',
    controller: PostEditComponent
  });

})();
