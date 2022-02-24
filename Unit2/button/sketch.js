let state = 0;

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER, TOP);
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

  push();
  fill("purple");
  rectMode(CORNER);
  rect(100,100,100,100);
  pop();
}

function mouseReleased() {
  if ((mouseX > 100) && (mouseX < 200) && (mouseY > 100) && (mouseY < 200)) {
  state = (state + 1) % 2;
  }
}
