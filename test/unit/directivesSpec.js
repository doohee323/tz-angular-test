'use strict';

describe('directive unit test', function() {

  var $compile, $rootScope;
  beforeEach(angular.mock.module('tz-ui'));

  beforeEach(module(function($provide) {
    $provide.value('test1', 'View1');
  }));

  beforeEach(inject([ '$compile', '$rootScope', function($c, $r) {
    $compile = $c;
    $rootScope = $r;
  } ]));

  it('get current version', function() {
    var element = $compile('<span app-version></span>')($rootScope);
    expect(element.text()).toEqual('0.3');
  });
});
