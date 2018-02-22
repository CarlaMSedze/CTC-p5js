var im = []; // Declare an array to contain 2 images

function preload() {

im[0] = loadImage('https://raw.githubusercontent.com/CarlaMSedze/CTC-p5js/master/Postit_Clock/Post_it_Clock_Step_03/photo.jpg');  
im[1] = loadImage('https://raw.githubusercontent.com/CarlaMSedze/CTC-p5js/master/Postit_Clock/Post_it_Clock_Step_03/photo2.jpg');

}

function setup() {
	
  createCanvas(800, 400);
  background(220);  // We make the sketch the size of the image
  
}

function draw() {

  image(im[0], 0, 0); 
  image(im[1], 400, 0);  

}

