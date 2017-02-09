'use strict';

describe('Component: District4Component', function () {

  // load the controller's module
  beforeEach(module('indivisibleks2App'));

  var District4Component, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    District4Component = $componentController('District4Component', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
