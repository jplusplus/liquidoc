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
        scope.doc = scope.docViewer;
        scope.doc.template = parser.parse([
          "# Yolo title",
          "## Subtitle",
          "",
          "Lorem markdownum demptos colorem sumere dantem. Nostri Turnus, ad undis virus,",
          "vetitae semicaper ab speciem sopita **honesta** in simul et quot. Splendescunt",
          "omnes, cumque, paravi videres currum, pro adeo monte veteres rege.",
          "",
          "Vera ipse Proetus partes, ex deducite nomina se fluunt tu venabula neque et",
          "talis auxiliaris pudori arces, exercent. Inmemor iter, in [urbes",
          "donavi](http://www.wedrinkwater.com/): tenuit pater inermis ut inposito est",
          "inquit Cephaloque fervebant."
        ].join("\n"));
      }
    }
  })
