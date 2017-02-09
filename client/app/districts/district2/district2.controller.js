'use strict';
(function(){

class District2Component {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('indivisibleks2App')
  .component('district2', {
    templateUrl: 'app/districts/district2/district2.html',
    controller: District2Component
  });

})();
