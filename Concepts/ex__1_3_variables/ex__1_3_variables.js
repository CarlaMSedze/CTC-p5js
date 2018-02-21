function setup() { 
  createCanvas(100, 100);
  background(220);
  } 

function draw() { 
  var value1 = 0;
  var value2 = 100;
  line(value1, value1, value2, value2);
  line(value1, value2, value2, value1);
}