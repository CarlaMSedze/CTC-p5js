function setup() { 
  createCanvas(400, 400);
  background(220);
  } 

function draw() { 
  noStroke();                // Draw borderless shapes
  fill(255, 0, 0);           // Fill shapes with pure red color
  ellipse(100, 100, 30, 30); // Circle of 30 pixels diameter
}