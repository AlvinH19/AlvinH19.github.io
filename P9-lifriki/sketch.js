var Uaquoklisti = [];

function setup() {
  createCanvas(600, 600);
  for (var i = 0; i < 100; i = i+1){
    Uaquoklisti[i] = new Uaquok(random(200,400),random(100,400),random(50,200));
  }
}

function draw() {
  background(50,150,0);
  fill(70,120,100);
	ellipse(300,300,500,500);
  for (var i = 0; i < Uaquok.length; i = i+1){
   	Uaquoklisti[i].move();
   	Uaquoklisti[i].show();
   }
 }

 function mousePressed(){
  for (var i = Uaquok.length-1; i >= 0; i = i-1){
    if(fjarl(Uaquoklisti[i].x,Uaquoklisti[i].y,mouseX,mouseY) < 50){
		    Uaquok.splice(i,1);
	  }
  }
}

class Uaquok{
  constructor(x,y,bukur,haus,litur){
    this.x = x;
    this.y = y;
    this.bukur = bukur;
    this.haus = haus;
    this.dir = random(0,2*PI);
    this.speed = random(0,5);
    this.bukurlitur = color(100,100,100);
  }

// Uaquok
show() {
  rectMode(CENTER);
  strokeWeight(2);
  stroke(0);
	// búkur
	fill(this.bukurlitur);
	ellipse(this.x,this.y,-250,this.bukur)
  // haus
	fill(70,150,0)
	rect(this.x,this.y - this.bukur/2, this.haus,this.haus)
	//fætur
	fill(70,150,0)
	line (this.x - 20, this.y + this.bukur/2, this.x - 50, this.y + this.bukur/2 + 75);
  line (this.x + 20, this.y + this.bukur/2, this.x + 50, this.y + this.bukur/2 + 75);
	//hendur
	fill(0)
	line (this.x - 20, this.y , this.x - 20, this.y + 40);
  line (this.x + 20, this.y , this.x + 20, this.y + 40);
	// augu
	fill(0)
	ellipse (this.x - 50,this.y - this.bukur/2, 20,40);
  ellipse (this.x + 50,this.y - this.bukur/2, 20,40);

 }

 move(){
		this.x = this.x + this.speed*cos(this.dir);
		this.y = this.y + this.speed*sin(this.dir);
		this.speed = this.speed/1.07;
		if(this.speed < 0.3){
			this.dir = random(0,2*PI);
			this.speed = random(1,7);
    }
    if (fjarlægð(this.x,this.y,width/2,height/2) > 250){
      this.litur();
      this.dir = atan((this.y - height/2)/(this.x-width/2));
      if(this.x - width/2 > 0){
        this.dir = this.dir + PI;
    }
  }
}
  litur(){
  		this.bukurlitur = color(random(255), random(255), random(255));
  }
}


function fjarlægð(x1,y1,x2,y2){
  var dist = sqrt((x1 - x2)*(x1 - x2) + (y1 - y2)*(y1 - y2));
  return dist;
}
