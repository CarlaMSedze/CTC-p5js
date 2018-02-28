var im = [];
var imFile = ["https://github.com/CarlaMSedze/CTC-p5js/blob/master/Postit_Clock/Post_it_Clock_Step_05/one.jpg","https://github.com/CarlaMSedze/CTC-p5js/blob/master/Postit_Clock/Post_it_Clock_Step_05/two.jpg","https://github.com/CarlaMSedze/CTC-p5js/blob/master/Postit_Clock/Post_it_Clock_Step_05/three.jpg","https://github.com/CarlaMSedze/CTC-p5js/blob/master/Postit_Clock/Post_it_Clock_Step_05/four.jpg"]; // Declare an array to contain 2 images

function preload() {

im[0] = loadImage(imFile[0]);  
im[1] = loadImage(imFile[1]);

}

function setup() {
	
  createCanvas(800, 800);
  background(220);  // We make the sketch the size of the image
  size(800, 800);  // Make your sketch bigger to show all the images at once   
  for (int i = 0; i < 4; i = i + 1) {
    im[i] = loadImage(imFile[i]);  // Load images according to the counter 'i'
  }
  
}

function draw() {

  image(im[0], 0, 0);   // Show the images
  image(im[1], 400, 0);  
  image(im[2], 0, 400);  
  image(im[3], 400, 400);  

}

