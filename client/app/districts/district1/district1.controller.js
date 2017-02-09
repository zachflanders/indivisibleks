'use strict';
(function(){

class District1Component {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('indivisibleks2App')
  .component('district1', {
    templateUrl: 'app/districts/district1/district1.html',
    controller: District1Component
  });

})();
