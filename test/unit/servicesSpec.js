'use strict';

describe('Service unit test', function() {
  beforeEach(module('tz-ui'));

  describe('Version service test1', function() {
    it('get version service value', inject([ '$rootScope', 'Version',
        function($rootScope, Version) {
          var scope = $rootScope.$new();
          scope.test1 = 'View1';
          expect(Version.getVersion(scope)).toEqual('0.1');
          scope.test1 = 'View2';
          expect(Version.getVersion(scope)).toEqual('0.2');
        } ]));

  });
});
