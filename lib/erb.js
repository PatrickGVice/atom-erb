function toggle() {
  var editor = atom.workspace.activePaneItem;
  var selection = editor.getSelection();
  var cursor = editor.getCursor();
  var startRange = selection.getBufferRange();
  var startPoint = startRange.start;
  var text = selection.getText();
  editor.insertText("<%=" + text + " %>");
  editor.moveCursorToPreviousWordBoundary();
  editor.moveCursorToPreviousWordBoundary();

  // console.log("This is the start range: ");
  // console.log(startRange);
  // var debugText = editor.getTextInBufferRange( [ [startPoint.row, startPoint.column], [startPoint.row, startPoint.column + 4] ] );
  // console.log("This is the debug text: ");
  // console.log(debugText);

  // Check if there's an output bracket
  // Remove brackets if there's an execute bracket
  // Add output bracket if no other brackets are present
    // add selection
}

module.exports = {
  activate: function() {
    return atom.workspaceView.command("erb:toggle", function () {
      toggle();
    });
  }
}
