var nX = 0;
var aY = 0;
var aX = 15;

function setup() { 
  createCanvas(400, 400);
  background(220);
  } 

function draw() { 
  background(220);
  aY = aY + 1;  // Increase apple's coordinate
  if (aY > height) {
    aY = 15; 
    aX = int(random(width - 20));
    }

  ellipse(aX, aY, 20, 20);  
  
  rect(nX, height - 25, 20, 20); 

  
  //  Draw Newton with a varaible X coordinate
}

function keyPressed() {

	       // Fill shapes with pure red color
rect(nX, height - 25, 20, 20); 
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

  if (nX < 0) {
    nX = 0;
  }
  if (nX > width - 20) {  // Check the size of the square on the right side
    nX = width - 20;
  }
}
