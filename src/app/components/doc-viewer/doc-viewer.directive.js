'use strict';

angular.module('liquidoc')
  .directive('docViewer', function(){
    return {
      restrict: 'A',
      templateUrl: 'app/components/doc-viewer/doc-viewer.html',
      scope: {
        docViewer: "="
      },
      link: function(scope, attrs, element) {

      }
    }
  })
