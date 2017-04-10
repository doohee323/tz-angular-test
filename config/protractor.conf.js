'use strict';

exports.config = {

  allScriptsTimeout : 99999,
  seleniumPort : 4444,
  baseUrl : 'http://localhost:9999/',
  framework : 'jasmine',
  specs : [ '../test/e2e/**/*.js' ],
  capabilities : {
    'browserName' : 'chrome'
  },
  jasmineNodeOpts : {
    showColors : true,
    defaultTimeoutInterval : 30000,
    isVerbose : true,
    includeStackTrace : true
  }
};
