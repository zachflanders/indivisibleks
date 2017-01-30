'use strict';
(function(){

class EventAddComponent {
  constructor($http, $scope) {
    this.message = 'Hello';
    var vm = this;
    vm.event = {};
    vm.event.start = '';
    vm.event.end = '';


      this.addEvent = function(){
        $http.post('api/events/', vm.event );
        toastr.success('Added Event ' + vm.event.title);
        vm.event = {};
        document.body.scrollTop = document.documentElement.scrollTop = 0;
      };


  }
}

angular.module('indivisibleks2App')
  .component('eventAdd', {
    templateUrl: 'app/events/eventAdd/eventAdd.html',
    controller: EventAddComponent
  });

})();
