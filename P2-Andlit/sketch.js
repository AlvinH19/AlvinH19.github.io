var eyeSize = 20;
var faceWidth = 100;
var faceHeight = 150;
var x = 150;
var y = 150;

function setup(){
  createCanvas (300,300);
}

function draw(){
  background(255,204,0);
  fill(250,190,170);
  ellipse(x, y, faceWidth, faceHeight);

  arc(158, 165, 30, 16, 2, PI + QUARTER_PI);

var augaV = width/2 - faceWidth*0.25;
var augaH = width/2 + faceWidth*0.25;
fill(80,100,255);
ellipse(augaV, height/2, eyeSize, eyeSize);
fill(80,100,255);
ellipse(augaH, height/2, eyeSize, eyeSize);
  //.....kóði sem staðsetur augun m.v. x, y, faceWidth og faceHeight ætti að koma hér.
}

function mousePressed(){
  //Í hvert sinn sem músinni er smellt fá breyturnar ný gildi.
  faceWidth  = random(75,  150);
  faceHeight = random(100, 200);
  eyeSize    = random(10,  30);
}
