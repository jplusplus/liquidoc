'use strict';

angular.module('liquidoc')
  .directive('docEditor', function() {
    return {
      restrict: 'A',
      templateUrl: 'app/components/doc-editor/doc-editor.html',
      scope: {
        docEditor: "="
      },
      link: function(scope, attrs, element) {
        scope.doc = scope.docEditor;
      }
    }
  })
