let geo ;
let nfl ;
let skiing ;

function setup() {
  createCanvas(500, 700);

  geo = loadImage("assets/GeometricJosh.png");
  nfl = loadImage("assets/NFL.jpg");
  skiing = loadImage("assets/skiing.jpg");
}

function draw() {
  image(geo, width/5, 100, 100, 100);
  image(nfl, width/4, 200, 100, 100);
  image(skiing, width/3, 300, 100, 100);
}
