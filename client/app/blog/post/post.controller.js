'use strict';
(function(){

class PostComponent {
  constructor($http, $stateParams, Auth) {
    var vm = this;
    var id = $stateParams.id;
    $http.get('/api/posts/'+id).then(response => {
      vm.post = response.data;



    });
    this.hasRole = Auth.hasRole;

  }
}

angular.module('indivisibleks2App')
  .component('post', {
    templateUrl: 'app/blog/post/post.html',
    controller: PostComponent
  });

})();
