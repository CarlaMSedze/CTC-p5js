var nX = 0;
var nY = 0;
var aY = 0;
var aX = 15;
var aV = 0;    // Y speed, apples
var aA = 0.05; // Y acceleration, apples
var p = 0;       // Points
var pCount;  // Check whether to count points or not
var t = 0;      // Store the time 
var timer;


function setup() { 
  createCanvas(400, 400);
  background(220);
  nY = height - 25;
  t = millis();  // Initialize the time counter

  } 

function draw() { 
  background(220);
  aV = aV + aA;  // EstiaAte the speed according to the acceleration
  aY = aY + aV;  // EstiaAte the position according to the speed
  if (aY > height) {
    aY = 15; 
    aX = int(random(width - 20));
    aV = 0;  // Apples start falling at zero speed 
    // When throwing a new apple it will be possible 
    // to start counting points again
    pCount = true;  
    }

 fill(255);
    // Collision detection
  if (aY + 10 > nY && aY - 10 < nY + 20) {  // Is the circle at the same height as the square?
    if (aX + 10 > nX && aX - 10 < nX + 20) { // Is the circle on top of the square?
      fill(255, 0, 0);  // Change the filling color to red
      if (pCount == true){// If collision increase the points
      if (pCount) p = p + 1;
      pCount = false;  // Whenever you make it at this point, do not 
                       // count any more points
      }
    } 
  }

  ellipse(aX, aY, 20, 20);  
  
  rect(nX, nY, 20, 20); 

  timer = (millis() - t) / 1000;  // Count how much time has passed in seconds
  timer = timer.toFixed(2);
  // GAME OVER
  if (timer >= 30) {  // If time reaches 30 seconds, end the game
    noLoop();
  }

  // Show the time on the screen
  fill(0);

  
  text("Time: " + (30.00 - timer), 10, 20);
  
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
