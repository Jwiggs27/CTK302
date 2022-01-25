let font1, font2 ;

function setup() {
  createCanvas(1500, 1500);
  font1 = loadFont("assets/Righteous.ttf");
  font2 = loadFont("assets/Neonderthaw.ttf");
}

function draw() {
  background(100);

  textSize(80);
  textFont(font1);
  text("hello there", width/2, 100);

  textFont(font2);
  text("this is where the fun begins", width/3, 200);

}
