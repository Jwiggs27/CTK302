let city;
let sunset;
let night;
let state = 0;
let timer = 0;

function setup() {
  createCanvas(900, 500);

  city = loadImage("assets/Abu Dhabi.jpg");
  sunset = loadImage("assets/Sunset.jpg");
  night = loadImage("assets/Night.jpg");
}

function draw() {

  background(100);

  switch (state) {

    case 0:
      image(city, 0, 0, 900, 500);


      break;

    case 1:
      image(sunset, 0, 0, 900, 500);

      //timer code
      timer++ ;
      if(timer > 3*60) {
        timer = 0;
        state = 2;
      }
      break;

    case 2:
      image(night, 0, 0, 900, 500);

      //timer code
      timer++ ;
      if(timer > 5*60) {
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
