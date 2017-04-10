'use strict';

angular.module('tz-ui').service('Version',
    function() {
      return {
        getVersion : function(scope) {
          if(!scope) return "0.3";
          if(scope.test1 === 'View1') {
            return "0.1";
          } else if(scope.test1 === 'View2') {
            return "0.2";
          } else {
            return "0.3";
          }
        }
      };
    });
