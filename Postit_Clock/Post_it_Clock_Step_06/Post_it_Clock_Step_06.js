var im = [];
var imFile = ["https://github.com/CarlaMSedze/CTC-Processing/blob/master/en/_02_PostIt_Clock/Post_it_Clock_Step_06/data/1.jpg",
"https://github.com/CarlaMSedze/CTC-Processing/blob/master/en/_02_PostIt_Clock/Post_it_Clock_Step_06/data/2.jpg",
"https://github.com/CarlaMSedze/CTC-Processing/blob/master/en/_02_PostIt_Clock/Post_it_Clock_Step_06/data/3.jpg",
"https://github.com/CarlaMSedze/CTC-Processing/blob/master/en/_02_PostIt_Clock/Post_it_Clock_Step_06/data/4.jpg",
"https://github.com/CarlaMSedze/CTC-Processing/blob/master/en/_02_PostIt_Clock/Post_it_Clock_Step_06/data/5.jpg",
"https://github.com/CarlaMSedze/CTC-Processing/blob/master/en/_02_PostIt_Clock/Post_it_Clock_Step_06/data/6.jpg",
"https://github.com/CarlaMSedze/CTC-Processing/blob/master/en/_02_PostIt_Clock/Post_it_Clock_Step_06/data/7.jpg",
"https://github.com/CarlaMSedze/CTC-Processing/blob/master/en/_02_PostIt_Clock/Post_it_Clock_Step_06/data/8.jpg",
"https://github.com/CarlaMSedze/CTC-Processing/blob/master/en/_02_PostIt_Clock/Post_it_Clock_Step_06/data/9.jpg",]; // Declare an array to contain 2 images

function preload() {

	for (var i = 0; i < 10; i = i + 1) {
    im[i] = loadImage(imFile[i]);  
}

/*im[0] = loadImage(imFile[0]);  
im[1] = loadImage(imFile[1]);
im[2] = loadImage(imFile[3]);
im[3] = loadImage(imFile[3]);
im[4] = loadImage(imFile[4]);
im[5] = loadImage(imFile[5]);
im[6] = loadImage(imFile[6]);
im[7] = loadImage(imFile[7]);
im[8] = loadImage(imFile[8]);*/

}

function setup() {

  createCanvas(700, 95);  // 10 images of 70 pixels wide and 95 pixels high   
 
}

function draw() {
  for (var i = 0; i < 10; i = i + 1) {
    image(im[i], 70 * i, 0);  // Show the images in sequence
  }
}