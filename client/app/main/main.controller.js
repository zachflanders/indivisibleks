'use strict';

(function() {

class MainController {

  constructor($http, $scope, socket) {
    this.$http = $http;

    $http.get('/api/events').then(response => {
      $scope.events = [];

      response.data.forEach(function(item){
        if(moment(item.end).toDate() > moment().toDate()){
          $scope.events.push(item);
        };
      });


    });
    this.socket = socket;
    this.awesomeThings = [];

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('thing');
    });
  }

  $onInit() {
    this.$http.get('/api/things').then(response => {
      this.awesomeThings = response.data;
      this.socket.syncUpdates('thing', this.awesomeThings);
    });
  }

  addThing() {
    if (this.newThing) {
      this.$http.post('/api/things', { name: this.newThing });
      this.newThing = '';
    }
  }

  deleteThing(thing) {
    this.$http.delete('/api/things/' + thing._id);
  }
}

angular.module('indivisibleks2App')
  .component('main', {
    templateUrl: 'app/main/main.html',
    controller: MainController
  });

})();
