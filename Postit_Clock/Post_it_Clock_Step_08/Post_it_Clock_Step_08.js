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

  var m;           // Take the minutes from the computer's clock and store it in a variable
  var m_dec;    // Get the most significant digit
  var m_uni;

  var s;           // Take the seconds from the computer's clock and store it in a variable
  var s_dec;    // Get the most significant digit
  var s_uni;

function preload() {

	for ( i = 0; i < 10; i = i + 1) {
    im[i] = loadImage(imFile[i]);  
}

}
function setup() {
  createCanvas(140, 285);  // 2 digits of 70x95 pixels

}

function draw() {
  
  h = hour();             // Take the hour from the computer and store it into a variable
  h_dec = int(h / 10);    // Get the most significant digit
  h_uni = h - h_dec * 10; // Get the least significant digit
  
  image(im[h_dec], 0, 0);     // Show the most significant digit
  image(im[h_uni], 70, 0);    // Show the least significant digit


  m = minute();           // Take the minutes from the computer's clock and store it in a variable
  m_dec = int(m / 10);    // Get the most significant digit
  m_uni = m - m_dec * 10; // Get the least significant digit
  
  image(im[m_dec], 0, 95);    // Show the most significant digit
  image(im[m_uni], 70, 95);

  s = second();           // Take the seconds from the computer's clock and store it in a variable
  s_dec = int(s / 10);    // Get the most significant digit
  s_uni = s - s_dec * 10; // Get the least significant digit
  
  image(im[s_dec], 0, 190);   // Show the most significant digit
  image(im[s_uni], 70, 190);   
}
