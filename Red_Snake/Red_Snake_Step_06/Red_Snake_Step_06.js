var red;
var time;
var diameter;

function setup() { 
  createCanvas(400, 400);
  background(220);
  time = 0;
  setFrameRate(60);
  } 

function draw() { 

  time = time + 1;  // Increase time in one unit
  red = 128 * (1 + sin(time * 2 * PI / frameRate()/ 20));
  diameter = 50 * (1 + sin( time * 2 * PI / frameRate()/ 5));
  console.log(frameRate());  // Change the color red, repeat every 20s

  noStroke();                // Draw borderless shapes
  fill(red, 0, 0);           // Fill shapes with pure red color
  ellipse(mouseX, mouseY, diameter, diameter); // Circle's placement following the mouse pointer


}