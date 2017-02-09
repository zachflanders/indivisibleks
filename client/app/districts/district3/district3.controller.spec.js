'use strict';

describe('Component: District3Component', function () {

  // load the controller's module
  beforeEach(module('indivisibleks2App'));

  var District3Component, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    District3Component = $componentController('District3Component', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
