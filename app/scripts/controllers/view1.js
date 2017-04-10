'use strict';

/**
 */
angular.module('tz-ui').controller('View1Ctrl',
    [ '$scope', 'Version', function($scope, Version) {

      $scope.test1 = 'View1';
      $scope.version = Version.getVersion($scope);
      
    } ]);
