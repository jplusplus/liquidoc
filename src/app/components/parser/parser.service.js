'use strict';

angular.module('liquidoc')
  .service('parser', function() {
    return {
      parse: function(template, dataset) {
        return template;
      }
    };
  });
