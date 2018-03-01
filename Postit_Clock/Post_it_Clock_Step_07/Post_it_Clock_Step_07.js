var im = [];
var imFile = ["https://raw.githubusercontent.com/arduino/CTC-Processing/master/en/_02_PostIt_Clock/Post_it_Clock_Step_06/data/0.jpg",
"https://raw.githubusercontent.com/arduino/CTC-Processing/master/en/_02_PostIt_Clock/Post_it_Clock_Step_06/data/1.jpg",
"https://raw.githubusercontent.com/arduino/CTC-Processing/master/en/_02_PostIt_Clock/Post_it_Clock_Step_06/data/2.jpg",
"https://raw.githubusercontent.com/arduino/CTC-Processing/master/en/_02_PostIt_Clock/Post_it_Clock_Step_06/data/3.jpg",
"https://raw.githubusercontent.com/arduino/CTC-Processing/master/en/_02_PostIt_Clock/Post_it_Clock_Step_06/data/4.jpg",
"https://raw.githubusercontent.com/arduino/CTC-Processing/master/en/_02_PostIt_Clock/Post_it_Clock_Step_06/data/5.jpg",
"https://raw.githubusercontent.com/arduino/CTC-Processing/master/en/_02_PostIt_Clock/Post_it_Clock_Step_06/data/6.jpg",
"https://raw.githubusercontent.com/arduino/CTC-Processing/master/en/_02_PostIt_Clock/Post_it_Clock_Step_06/data/7.jpg",
"https://raw.githubusercontent.com/arduino/CTC-Processing/master/en/_02_PostIt_Clock/Post_it_Clock_Step_06/data/8.jpg",
"https://raw.githubusercontent.com/arduino/CTC-Processing/master/en/_02_PostIt_Clock/Post_it_Clock_Step_06/data/9.jpg"]; // Declare an array to contain 2 images

  var h;             // Take the hour from the computer and store it into a variable
  var h_dec;    // Get the most significant digit
  var h_uni;

function preload() {

	for ( i = 0; i < 10; i = i + 1) {
    im[i] = loadImage(imFile[i]);  
}

}
function setup() {
  createCanvas(140, 95);  // 2 digits of 70x95 pixels

}

function draw() {
  h = hour();             // Take the hour from the computer and store it into a variable
  h_dec = int(h / 10);    // Get the most significant digit
  h_uni = h - h_dec * 10; // Get the least significant digit
  
  image(im[h_dec], 0, 0);     // Show the most significant digit
  image(im[h_uni], 70, 0);    // Show the least significant digit
}
