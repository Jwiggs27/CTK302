let state = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {

  background(100);

  switch (state) {

    case 0:
      background("yellow");
      for (let j = 0; j<20 ; j++){
        for (let i = 0; i<20 ; i++){
        rect(i*20, j*20, 12, 12);
        }
      }
      break;

    case 1:
      background("blue");
      for (let j = 0; j<30 ; j++){
        for (let i = 0; i<30 ; i++){
        ellipse(i*20, j*20, 12, 12);
        }
      }
      break;

    case 2:
      background("red");
      for (let j = 0; j<70 ; j++){
        for (let i = 0; i<80 ; i++){
        rect(i*20, j*20, 20, 20);
        }
      }
      break;

    case 3:
      background("purple");
      for (let j = 0; j<30 ; j++){
        for (let i = 0; i<20 ; i++){
        rect(i*50, j*50, 20, 20);
        }
      }
      break;

    case 4:
      background("green");
      for (let j = 0; j<20 ; j++){
        for (let i = 0; i<20 ; i++){
        triangle(i*70, j*70, 12, 12);
        }
      }
      break;

  }
}

function mouseReleased() {
  state++;
  if (state > 4) state = 0;

}
