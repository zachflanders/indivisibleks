'use strict';
(function(){

class BlogComponent {
  constructor($http, $sce, Auth) {
    this.message = 'Hello';
    var vm = this;
    $http.get('/api/posts').then(function(response){
      vm.posts = response.data;
      console.log(vm.posts);
    });
    vm.trustAsHtml = $sce.trustAsHtml;
    this.hasRole = Auth.hasRole;
      this.share = function(post, title){
        FB.ui(
        {
            method: 'feed',
            link: 'http://www.indivisibleks.com/post/'+post,
            name: title,
            picture: 'https://c1.staticflickr.com/1/582/32735500115_cc5ba83595_o.png'
        });
      };
    }
}

angular.module('indivisibleks2App')
  .component('blog', {
    templateUrl: 'app/blog/blog/blog.html',
    controller: BlogComponent
  });

})();
