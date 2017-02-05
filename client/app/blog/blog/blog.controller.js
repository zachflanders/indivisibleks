'use strict';
(function(){

class BlogComponent {
  constructor($http, $sce, Auth) {
    this.message = 'Hello';
    var vm = this;
    $http.get('/api/posts').then(function(response){
      vm.posts = response.data;
    });
    vm.trustAsHtml = $sce.trustAsHtml;
      this.hasRole = Auth.hasRole;

  }
}

angular.module('indivisibleks2App')
  .component('blog', {
    templateUrl: 'app/blog/blog/blog.html',
    controller: BlogComponent
  });

})();
