'use strict';
(function(){

class EventEditComponent {
  constructor($http, $stateParams) {
    var vm = this;
    var id = $stateParams.id;
    $http.get('/api/events/'+id).then(response => {
      vm.event = response.data;



    });
    this.editEvent = function(){
      $http.put('api/events/' + id, vm.event );
      toastr.success('Edited event ' + vm.event.title);
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    };

  }
}

angular.module('indivisibleks2App')
  .component('eventEdit', {
    templateUrl: 'app/events/eventEdit/eventEdit.html',
    controller: EventEditComponent
  });

})();
