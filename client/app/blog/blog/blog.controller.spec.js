'use strict';

describe('Component: BlogComponent', function () {

  // load the controller's module
  beforeEach(module('indivisibleks2App'));

  var BlogComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    BlogComponent = $componentController('BlogComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
