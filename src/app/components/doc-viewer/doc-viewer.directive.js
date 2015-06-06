'use strict';

angular.module('liquidoc')
  .directive('docViewer', function(parser){
    return {
      restrict: 'A',
      templateUrl: 'app/components/doc-viewer/doc-viewer.html',
      scope: {
        docViewer: "="
      },
      link: function(scope, attrs, element) {
        // Shortcut to doc
        scope.doc = scope.docViewer;
        // Selected value
        scope.active = null;
        // Value possibilities
        scope.possibilities = []
        scope.doc.template = [
          "# Yolo title",
          "## Subtitle {{ employment2014 }}",
          "",
          "Lorem markdownum demptos colorem sumere dantem. Nostri Turnus, ad undis virus,",
          "vetitae semicaper ab speciem sopita **honesta** in simul et quot. Splendescunt",
          "omnes, cumque, paravi videres currum, pro adeo monte veteres rege.",
          "",
          "Vera ipse Proetus partes, ex deducite nomina se fluunt tu venabula neque et",
          "talis auxiliaris pudori arces, exercent. Inmemor iter, in [urbes",
          "donavi](http://www.wedrinkwater.com/): tenuit pater inermis ut inposito est",
          "inquit Cephaloque fervebant."
        ].join("\n");

        scope.$watch('[doc, active]', function() {
          // Do not use the first line
          var dataset = (scope.doc.dataset || []).slice(1);
          // Preview the document by parsing the template,
          // using the current dataset and the selected active value
          scope.preview = parser.parse(scope.doc.template, scope.doc.dataset, scope.active);
          // Collect possibilities according to the dataset
          scope.possibilities = _.map(dataset, function(row, index) {
            // Picks from the first column
            return row[0] || null;
          });
        }, true);
      }
    }
  })
