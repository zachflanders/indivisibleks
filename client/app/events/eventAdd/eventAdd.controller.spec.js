'use strict';

describe('Component: EventAddComponent', function () {

  // load the controller's module
  beforeEach(module('indivisibleks2App'));

  var EventAddComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    EventAddComponent = $componentController('EventAddComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
