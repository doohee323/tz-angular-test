'use strict';

/* 컨트롤러 단위 테스트 */

describe('controllers unit test', function() {
  beforeEach(module('SodaTransferUI'));

  var scope;
  it('View1Ctrl test1 value', inject(function($rootScope, $controller) {
    debugger;
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
