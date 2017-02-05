'use strict';

describe('Component: DistrictsComponent', function () {

  // load the controller's module
  beforeEach(module('indivisibleks2App'));

  var DistrictsComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    DistrictsComponent = $componentController('DistrictsComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
