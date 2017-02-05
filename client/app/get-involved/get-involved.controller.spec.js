'use strict';

describe('Component: GetInvolvedComponent', function () {

  // load the controller's module
  beforeEach(module('indivisibleks2App'));

  var GetInvolvedComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    GetInvolvedComponent = $componentController('GetInvolvedComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
