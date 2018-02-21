var red;
var time;
var fr;

function setup() { 
  createCanvas(400, 400);
  background(220);
  //red = 255;
  time = 0;
  frame_rate = 30; //frame per second
  frameRate(frame_rate);
  } 

function draw() { 

  time = time + 1;  // Increase time in one unit
  red = int (128 * (1 + sin(time * 2 * PI / frame_rate/2)));  // Change the color red, repeat every 20s

  noStroke();                // Draw borderless shapes
  fill(red, 0, 0);           // Fill shapes with pure red color
  ellipse(mouseX, mouseY, 30, 30); // Circle's placement following the mouse pointer


}