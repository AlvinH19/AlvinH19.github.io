function setup() {
  createCanvas(400,400);
  rectMode(CENTER);
}

function draw() {
  background(150,200,0,2);
  fill(236,36,94);
  if(mouseX < 200){
    //x er á bilinu frá 0 upp í width/2
  	fill(250,40,100);
    ellipse(mouseX, mouseY, 50, 50);
  }
   if(mouseX > 200){
    // x er á bilinu frá width/2 upp í width
  	fill(250,36,236);
    rect(mouseX,mouseY, 50, 50);
  }
   if(mouseX < 400){
  	fill(94,36,236);
    triangle(mouseX,mouseY, 50, 50);
  }
}
