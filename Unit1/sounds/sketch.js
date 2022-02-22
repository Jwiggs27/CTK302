let song1 ;

function preLoad()  {
  song1 = loadSound("assets/uke.mp3");
  song1.loop();
}

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(100) ;
}

function mouseReleased() {
  if (song1.isPlaying()) {
    song1.pause() ;
  } else {
    song1.loop();
  }

}


function touchStarted() {
  getAudioContext().resume();
  }
