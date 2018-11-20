function setup() {
  createCanvas(600,500);
}

function draw() {
  background(150,259,0);
  Uaquok(150,150,150,100,150);
	Uaquok(mouseX,mouseY,30,120,100);
	Uaquok(350,300,250,150,50);
}

// Uaquok
function Uaquok(x,y,bukur,haus,litur){
  rectMode(CENTER);
	// búkur
	fill(70,150,0)
	ellipse(x,y,-250,bukur)
  // haus
	fill(70,150,0)
	rect(x,y - bukur/2, haus,haus)
	//fætur
	fill(70,150,0)
	line (x - 20, y + bukur/2, x - 50, y + bukur/2 + 75);
  line (x + 20, y + bukur/2, x + 50, y + bukur/2 + 75);
	//hendur
	fill(0)
	line (x - 20, y , x - 20, y + 40);
  line (x + 20, y , x + 20, y + 40);
	// augu
	fill(0)
	ellipse (x - 50,y - bukur/2, 20,40);
  ellipse (x + 50,y - bukur/2, 20,40);
}
