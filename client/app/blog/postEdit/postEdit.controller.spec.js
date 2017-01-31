'use strict';

describe('Component: PostEditComponent', function () {

  // load the controller's module
  beforeEach(module('indivisibleks2App'));

  var PostEditComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    PostEditComponent = $componentController('PostEditComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
