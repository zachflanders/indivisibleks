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
    this.share = function(post, title){
      console.log(post);
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
  .component('post', {
    templateUrl: 'app/blog/post/post.html',
    controller: PostComponent
  });

})();
