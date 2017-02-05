'use strict';
(function(){

class GetInvolvedComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('indivisibleks2App')
  .component('getInvolved', {
    templateUrl: 'app/get-involved/get-involved.html',
    controller: GetInvolvedComponent
  });

})();
