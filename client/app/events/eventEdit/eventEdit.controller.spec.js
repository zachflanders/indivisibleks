'use strict';

describe('Component: EventEditComponent', function () {

  // load the controller's module
  beforeEach(module('indivisibleks2App'));

  var EventEditComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    EventEditComponent = $componentController('EventEditComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
