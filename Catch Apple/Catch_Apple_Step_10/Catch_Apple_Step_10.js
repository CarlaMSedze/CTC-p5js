var nX = 0;
var nY = 0;
var aY = 0;
var aX = 15;
var aV = 0;    // Y speed, apples
var aA = 0.05; // Y acceleration, apples
var p = 0;       // Points
 
function setup() { 
  createCanvas(400, 400);
  background(220);
  nY = height - 25;
  } 

function draw() { 
  background(220);
  aV = aV + aA;  // EstiaAte the speed according to the acceleration
  aY = aY + aV;  // EstiaAte the position according to the speed
  if (aY > height) {
    aY = 15; 
    aX = int(random(width - 20));
    aV = 0;  // Apples start falling at zero speed 
    }

 fill(255);
    // Collision detection
  if (aY + 10 > nY && aY - 10 < nY + 20) {  // Is the circle at the same height as the square?
    if (aX + 10 > nX && aX - 10 < nX + 20) { // Is the circle on top of the square?
      fill(255, 0, 0);  // Change the filling color to red
      // If collision increase the points
      p = p + 1;
    } 
  }

  ellipse(aX, aY, 20, 20);  
  
  rect(nX, nY, 20, 20); 
  // Show the points on the screen
  fill(0);  
  text("Hits: " + p, 3 * width / 4, 20); // Text to the right on the screen

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
