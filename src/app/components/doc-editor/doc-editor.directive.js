'use strict';

angular.module('liquidoc')
  .directive('docEditor', function() {
    return {
      restrict: 'A',
      templateUrl: 'app/components/doc-editor/doc-editor.html',
      scope: {
        docEditor: "="
      },
      link: function(scope, element, attrs) {
        scope.doc = scope.docEditor;

        scope.doc.template = '';

        scope.buttons = ['test'];

        scope.parseCsv = function(dataset){
          var linesRaw, lines = [];

          linesRaw = dataset.split("\n");
          for (var i = 0; i < linesRaw.length; i++) {
            lines.push( linesRaw[i].split("\t") );
          };
          scope.doc.dataset = lines;

          scope.buttons = [];
          for (var i = 1; i < lines[0].length; i++) {
            var column = lines[0][i];
            scope.buttons.push(column);
          };
          console.log(scope.doc.dataset);
        };

        scope.insertVar = function(label){
          var textField = element.find('textarea.form-template');
          insertAtCursor(textField.get(0), '{{'+label+'}}');
        };


        // insertAtCursor is stolen from http://stackoverflow.com/questions/11076975/insert-text-into-textarea-at-cursor-position-javascript
        function insertAtCursor(myField, myValue) {
          //IE support
          if (document.selection) {
              myField.focus();
              sel = document.selection.createRange();
              sel.text = myValue;
          }
          //MOZILLA and others
          else if (myField.selectionStart || myField.selectionStart == '0') {
              var startPos = myField.selectionStart;
              var endPos = myField.selectionEnd;
              myField.value = myField.value.substring(0, startPos)
                  + myValue
                  + myField.value.substring(endPos, myField.value.length);
          } else {
              myField.value += myValue;
          }
        }

      }
    }
  })
