var red;

function setup() { 
  createCanvas(400, 400);
  background(220);
  red = 255;
  } 

function draw() { 

  //var red = 255;

  red = red - 1;            // Make the red a little darker
  if (red < 0){
    red = 255;                 // Once it reaches black, make it light red again
  }

  noStroke();                // Draw borderless shapes
  fill(red, 0, 0);           // Fill shapes with pure red color
  ellipse(mouseX, mouseY, 30, 30); // Circle's placement following the mouse pointer


}