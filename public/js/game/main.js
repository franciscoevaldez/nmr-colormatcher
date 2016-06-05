// colors
var colCyan   = new paper.Color(0/255, 163/255, 218/255),
    colMag    = new paper.Color(216/255, 18/255, 125/255),
    colYel    = new paper.Color(255/255, 240/255, 3/255),
    colBlack  = new paper.Color(0,0,0),
    colBase   = new paper.Color(1,1,1),
    targetCYMK,
    changeButton, confirmButton;


window.onload = function() {

  // declare the grid canvas
  var canvas = document.getElementById('colorPair__canvas');

  // create the paper object
  paper.setup(canvas);
  targetCYMK = getRandomColor();

  setupView();
  bindSliders();

  // Update canvas
  paper.view.update();

}