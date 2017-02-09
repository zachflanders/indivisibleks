'use strict';
(function(){

class District3Component {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('indivisibleks2App')
  .component('district3', {
    templateUrl: 'app/districts/district3/district3.html',
    controller: District3Component
  });

})();
