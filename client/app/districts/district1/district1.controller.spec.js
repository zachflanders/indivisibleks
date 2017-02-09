'use strict';

describe('Component: District1Component', function () {

  // load the controller's module
  beforeEach(module('indivisibleks2App'));

  var District1Component, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    District1Component = $componentController('District1Component', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
