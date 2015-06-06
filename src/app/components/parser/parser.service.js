'use strict';

angular.module('liquidoc')
  .service('parser', function($rootScope, $parse) {

    var TOKEN_REGEX = /{{(.*?)}}/g;
    var CONDITION_REGEX = /(if)\s+(.+)\s+(then)\s+(.+)\s+(else)\s+(.+)/im;

    return {
      parse: function(template, dataset, active) {
        return template.replace(TOKEN_REGEX, function(match, exp) {
          if(dataset && dataset.length) {
            // Create a new scope
            var scope = $rootScope.$new(true);
            // Row containing our data
            var row = _.find(dataset, function(r) {
              return r[0] === active;
            });
            // The expression is a human readable condition
            if( CONDITION_REGEX.test(exp) ) {
              // We may simplify it
              exp = exp.replace(CONDITION_REGEX, "$2 ? $4 : $6")
            }
            // Add data to the scope
            angular.extend(scope, _.object(dataset[0], row) );
            // Compile the expression with the new scope
            return $parse(exp)(scope);
          } else {
            return null;
          }

        });
      },
    };
  });
