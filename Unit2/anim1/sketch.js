let x = 0;
let font1;

function setup() {
  createCanvas(500, 500);
  rectMode(CENTER);
  font1 = loadFont("assets/Righteous.ttf");
}

function draw() {
  background('black');
  fill('white');
  textSize(50);
  textFont(font1);
  text("hello there", x, 100);
  //rect(x,height/2,10,50);
  x+=5;
  if(x> width) {
    x= 0;
  }
}
