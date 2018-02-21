function setup() { 
  createCanvas(400, 400);
  background(220);
  } 

function draw() { 
  noStroke();                // Draw borderless shapes
  fill(255, 0, 0);           // Fill shapes with pure red color
  ellipse(mouseX, mouseY, 30, 30); // Circle's placement following the mouse pointer
}