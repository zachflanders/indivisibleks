'use strict';
(function(){

class District4Component {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('indivisibleks2App')
  .component('district4', {
    templateUrl: 'app/districts/district4/district4.html',
    controller: District4Component
  });

})();
