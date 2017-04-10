'use strict';

exports.config = {
  basePath: '../',
    
  specs : [ 
     'test/e2e/**/*.js'
  ],

  // 실제 테스트에 사용될 브라우저. multiCapabilities라는 키값으로 여러개의 브라우저를 지정할 수도 있다.
  capabilities : {
    'browserName' : 'chrome'
  },

  baseUrl : 'http://localhost:8000/',
  framework : 'jasmine'
};

