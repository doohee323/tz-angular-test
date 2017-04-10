'use strict';

/**
 */
angular.module('tz-ui').controller('View2Ctrl',
    [ '$scope', 'Version', function($scope, Version) {

      $scope.test1 = 'View2';
      $scope.version = Version.getVersion($scope);

    } ]);
