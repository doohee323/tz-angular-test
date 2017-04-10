'use strict';

describe('filter unit test', function() {
	beforeEach(module('tz-ui'));

	describe('interpolate filter test', function() {
		beforeEach(module(function($provide) {
			$provide.value('test1', 'TEST_VER');
		}));

		it('interpolate filter exist', inject(function(interpolateFilter) {
			expect(interpolateFilter).not.toEqual(null);
		}));
	
		it('VERSION replace', inject(function(interpolateFilter) {
      var val = interpolateFilter('prefix %VERSION% postfix');
			expect(val).toEqual('prefix 0.3 postfix');
		}));
	});
});
