'use strict';

describe('controllers unit test', function() {
  beforeEach(module('tz-ui'));

  var scope;
  it('View1Ctrl test1 value', inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    var ctrl = $controller('View1Ctrl', {
      $scope : scope
    });
    expect(scope.test1).toEqual('View1');
  }));

  it('View2Ctrl test2 value', inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    var ctrl = $controller('View2Ctrl', {
      $scope : scope
    });
    expect(scope.test1).toEqual('View2');
  }));

});
