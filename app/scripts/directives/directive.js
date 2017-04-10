'use strict';

angular.module('tz-ui').directive('appVersion',
    [ 'Version', function(Version) {
      return function(scope, elm, attrs) {
        elm.text(Version.getVersion(scope));
      };
    } ]);

