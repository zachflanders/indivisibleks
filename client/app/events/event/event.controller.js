'use strict';
(function(){

class EventComponent {
  constructor($stateParams, $http, $scope, Auth) {
    var vm = this;
    var id = $stateParams.id;
    $http.get('/api/events/'+id).then(response => {
      vm.event = response.data;
    });

    $http.get('/api/events').then(response => {
      $scope.events = [];

      response.data.forEach(function(item){
        if(moment(item.end).toDate() > moment().toDate()){
          $scope.events.push(item);
        };
      });


    });

    $scope.eventsF = function (start, end, timezone, callback) {
      $http.get('/api/events').then(response => {
        var events = [];
        response.data.forEach(function(item){
          events.push({
            title: item.title,
            start: moment(item.start),
            end: moment(item.end)
          });
        });
        callback(events);

        //this.socket.syncUpdates('event', this.events);
      });
    };
    $scope.eventSources = [ $scope.eventsF];
    $scope.uiConfig = {
      calendar:{
        height: 600,
        editable: false,
        header:{
          left: 'month agendaWeek listMonth',
          center: 'title',
          right: 'today prev,next'
        }
      }
    };
    this.hasRole = Auth.hasRole;

  }
}

angular.module('indivisibleks2App')
  .component('event', {
    templateUrl: 'app/events/event/event.html',
    controller: EventComponent
  });

})();
