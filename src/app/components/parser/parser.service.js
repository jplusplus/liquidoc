'use strict';

angular.module('liquidoc')
  .service('parser', function() {
    return {
      parse: function(template, dataset, active) {
        return template.replace(/{{(.+)}}/g, function(match, exp) {
          // Extract path and trim its components
          var path = _.map( exp.split("|"), _.trim );
          // Add the active value as a component of the path
          if(path.length === 1 && active) { path.push(active); }
          // Row containing our data
          var row = null;
          // Index of the column in the row
          var col = null;
          // For each components of the path...
          _.forEach(path, function(comp, index) {
            switch(index) {
              // First component describes the name of the column to use in our row
              case 0:
                if(dataset && dataset.length) {
                  col = dataset[0].indexOf(comp) + 1;
                }
                break;
              // Second component describes the value of the column in our row
              case 1:
                // Find the row
                row = _.find(dataset, function(row) {
                  return row[0] === comp;
                });
                break;
            }
          });
          return row && col ? row[col] : null;
        });
      },
    };
  });
