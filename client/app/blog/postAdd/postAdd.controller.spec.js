'use strict';

describe('Component: PostAddComponent', function () {

  // load the controller's module
  beforeEach(module('indivisibleks2App'));

  var PostAddComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    PostAddComponent = $componentController('PostAddComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
