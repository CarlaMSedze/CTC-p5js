var im = [];
var imFile = ["https://raw.githubusercontent.com/CarlaMSedze/CTC-p5js/master/Postit_Clock/Post_it_Clock_Step_03/photo.jpg","https://raw.githubusercontent.com/CarlaMSedze/CTC-p5js/master/Postit_Clock/Post_it_Clock_Step_03/photo2.jpg"]; // Declare an array to contain 2 images

function preload() {

im[0] = loadImage(imFile[0]);  
im[1] = loadImage(imFile[1]);

}

function setup() {
	
  createCanvas(800, 400);
  background(220);  // We make the sketch the size of the image
  
}

function draw() {

  image(im[0], 0, 0); 
  image(im[1], 400, 0);  

}

