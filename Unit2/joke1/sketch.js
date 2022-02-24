let state = 0;

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER);
  rectMode(CENTER);
  textSize(20);
  textFont("Georgia");
}

function draw() {


  switch (state) {

    case 0:
      background("green") ;
      text("Why did the Chicken cross the road?", width/2, height/2);
      break;

    case 1:
      background("yellow");
      text("because I said so", width/2, height/2);
      break;


  }
}

function mouseReleased() {
  state++;
  if (state > 2) state = 0;

}
