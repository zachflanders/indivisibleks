'use strict';

describe('Component: District2Component', function () {

  // load the controller's module
  beforeEach(module('indivisibleks2App'));

  var District2Component, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    District2Component = $componentController('District2Component', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
