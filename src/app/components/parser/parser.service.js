'use strict';

angular.module('liquidoc')
  .service('parser', function() {
    return {
      parse: function(template, dataset) {
        return template.replace(/{{(.+)}}/, function(match, exp) {
          // Extract path and trim its components
          var path = _.map( exp.split("|"), _.trim );
          // Row containing our data
          var row = null;
          // Index of the column in the row
          var col = null;
          // For each components of the path...
          _.forEach(path, function(comp, index) {
            switch(index) {
              // First component describes the value of the column in our row
              case 0:
                // Find the row
                row = _.find(dataset, function(row) {
                  return row[0] === comp;
                });
                break;
              // Second component describes the name of the column to use in our row
              case 1:
                if(dataset && dataset.length) {
                  col = dataset[0].indexOf(comp) + 1;
                }
                break;
            }
          });
          return row && col ? row[col] : null;
        });
      },
    };
  });
