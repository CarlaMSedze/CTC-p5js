
var im;
function preload() {
  im = loadImage('photo.jpg');
}
function setup() {
  createCanvas(400, 400);
  background(220);  // We make the sketch the size of the image
  //im = loadImage('photo.jpg');  // Image name
   image(im, 0, 0);  
}

function draw() {
 // To show the image on the screen at the coordinates 0, 0
}