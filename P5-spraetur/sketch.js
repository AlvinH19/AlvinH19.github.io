var mikkihundur
var piratepug
var halloweenparty

function preload() {
 mikkihundur = loadImage('assets/mikkihundur.png'); // https://petthreads.com.au/wp-content/uploads/2017/01/IMG_2935-600x600.png
 piratepug = loadImage('assets/piratepug.png'); // https://petthreads.com.au/wp-content/uploads/2017/01/IMG_2958-600x600.png
halloweenparty = loadImage('assets/halloweenparty.jpg'); //https://media2.fdncms.com/orlando/imager/u/original/2445361/1000w_drink_plazaween.jpg

}

 function setup() {
   createCanvas(900,700);
   background(halloweenparty);

}

function draw(){
  image(mikkihundur,300,270);
  image(piratepug,5,270);

}
