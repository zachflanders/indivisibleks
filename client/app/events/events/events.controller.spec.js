'use strict';

describe('Component: EventsComponent', function () {

  // load the controller's module
  beforeEach(module('indivisibleks2App'));

  var EventsComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    EventsComponent = $componentController('EventsComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
