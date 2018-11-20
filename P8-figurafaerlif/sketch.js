var Uaquok1, Uaquok2, Uaquok3

function setup() {
  createCanvas(600,600);
  Uaquok1 = new Uaquok(150,150,150,100,150);
  Uaquok2 = new Uaquok(200,200,30,120,100);
  Uaquok3 = new Uaquok(350,300,250,150,50);
}

function draw() {
  background(150,259,0);
  fill(255,200,0);
	ellipse(300,300,500,500);
	if(fjarlægð(Uaquok1.x,Uaquok1.y,300,300) > 250){
		Uaquok1.blink(); //finna eitthvað nýtt sem hann geris (blink)
  }
else {
  Uaquok1.move();
}
Uaquok1.show();
if(fjarlægð(Uaquok2.x,Uaquok2.y,300,300) > 250){
  Uaquok2.blink();
}
else {
  Uaquok2.move();
}
Uaquok2.show();
if(fjarlægð(Uaquok3.x,Uaquok3.y,300,300) > 250){
  Uaquok3.blink();
}
else {
  Uaquok3.move();
}
Uaquok3.show();

}
class Uaquok{
  constructor(x,y,bukur,haus,litur){
    this.x = x;
    this.y = y;
    this.bukur = bukur;
    this.haus = haus;
    this.dir = random(0,2*PI);
    this.speed = random(0,5);
    this.eyeColor = color(100,100,100);
  }

// Uaquok
show() {
  rectMode(CENTER);
	// búkur
	fill(70,150,0)
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
		this.speed = this.speed/1.05;
		if(this.speed < 0.1){
			this.dir = random(0,2*PI);
			this.speed = random(1,5);
    }
}

blink(){
		this.eyeColor = color(random(255), random(255), random(255));

  }
}

function fjarlægð(x1,y1,x2,y2){
  var dist = sqrt((x1 - x2)*(x1 - x2) + (y1 - y2)*(y1 - y2));
  return dist;
}
