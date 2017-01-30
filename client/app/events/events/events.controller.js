'use strict';
(function(){

class EventsComponent {
  constructor($http, $scope, $rootScope, Auth) {
    this.message = 'Hello';
    $http.get('/api/events').then(response => {
      $scope.events = [];

      response.data.forEach(function(item){
        if(moment(item.end) > moment()){
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
            end: moment(item.end),
            url: '/event/'+item._id
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
  .component('events', {
    templateUrl: 'app/events/events/events.html',
    controller: EventsComponent
  });

})();
