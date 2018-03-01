var nX = 0;

function setup() { 
  createCanvas(400, 400);
  background(220);
  } 

function draw() { 
ellipse(15, 15, 20, 20);  
  rect(nX, height - 25, 20, 20);  //  Draw Newton with a varaible X coordinate
}

function keyPressed() {

	       // Fill shapes with pure red color

  // If the right key was pressed, increase the X coordinate in 3 units
  if (keyCode == RIGHT_ARROW) {
    nX = nX + 3;
    background(220);
  }
  // If the left key was pressed, decrease the X coordinate in 3 units
  if (keyCode == LEFT_ARROW) {
    nX = nX - 3;
    background(220);
  }
}