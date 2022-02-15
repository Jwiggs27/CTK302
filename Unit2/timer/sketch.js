let state = 0;
let timer = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {

  background(100);

  switch (state) {

    case 0:
    background("purple");
    for (let j = 0; j<30 ; j++){
      for (let i = 0; i<20 ; i++){
      triangle(i*50, j*50, 20, 20);
      }
    }
      //timer code
      timer++ ;
      if(timer > 3*60) {
        timer = 0;
        state = 1;
      }
      break;

    case 1:
    background("green");
    for (let j = 0; j<20 ; j++){
      for (let i = 0; i<20 ; i++){
      triangle(i*70, j*70, 12, 12);
      }
    }
      //timer code
      timer++ ;
      if(timer > 5*60) {
        timer = 0;
        state = 2;
      }
      break;



    case 2:
    background("blue");
    for (let j = 0; j<30 ; j++){
      for (let i = 0; i<30 ; i++){
      ellipse(i*20, j*20, 12, 12);
      }
    }
      //timer code
      timer++ ;
      if(timer > 3*60) {
        timer = 0;
        state = 0;
      }
      break;

  }
}

function mouseReleased() {
  state++;
  if (state > 2) state = 0;

}
