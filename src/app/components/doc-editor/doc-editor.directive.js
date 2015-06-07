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

        scope.conditionCollapse = true;
        scope.doc.template = '';
        scope.newCondition = {};
        scope.buttons = ['test'];

        var fledit = null;

        scope.save = function(doc) {
          if(fledit === null) {
            Fledit.create(doc).once("complete", function(file) {
              scope.$apply(function() {
                // Save the file instance
                scope.fledit = fledit = file;
              })
            })
          } else {
            fledit.content = doc;
            fledit.save();
          }
        }

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
            if(scope.buttons.indexOf(column) === -1){
              scope.buttons.push(column);
            }

          };
          console.log(scope.doc.dataset);
        };

        scope.insertVar = function(label){
          var textField = element.find('textarea.form-template');
          insertAtCursor(textField.get(0), '{{'+label+'}}');
        };

        scope.insertCondition = function(){
          console.log(scope.newCondition);
          var logic = (scope.newCondition.type)?scope.newCondition.type:'=';
          var cond = 'IF '+scope.newCondition.var+' '+logic+' '+scope.newCondition.value + ' THEN "' + scope.newCondition.then + '" ELSE "' + scope.newCondition.other + '"';
          var textField = element.find('textarea.form-template');
          insertAtCursor(textField.get(0), '{{'+cond+'}}');
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

          scope.doc.template = myField.value;
        }

      }
    }
  })
