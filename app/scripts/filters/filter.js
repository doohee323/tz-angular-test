'use strict';

angular.module('tz-ui').filter('interpolate', function($rootScope, Version) {
  return function(text) {
    return String(text).replace(/\%VERSION\%/mg, Version.getVersion());
  }
});
