var im;
var im2;

function preload() {
  im = loadImage('https://raw.githubusercontent.com/CarlaMSedze/CTC-p5js/master/Postit_Clock/Post_it_Clock_Step_02/photo.jpg');
  im2 = loadImage('https://raw.githubusercontent.com/CarlaMSedze/CTC-p5js/master/Postit_Clock/Post_it_Clock_Step_02/photo2.jpg');
}

function setup() {
  createCanvas(800, 400);
  background(220);  // We make the sketch the size of the image
  
}

function draw() {
  image(im, 0, 0);  // To show the image on the screen at the coordinates 0, 0
  image(im2, 400, 0);  // To show the image on the screen at the coordinates 0, 0
}