let x=0 ;
function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);

  push();
  translate(x,0);
  avatar();
  x +=5;
  if (x> width){
    x= -400;
  }
  pop();


  function avatar(){
    background('black');

    fill('white');
    quad(310, 185, 365, 185, 372, 246, 303, 246);

    fill('white');
    quad(312, 246, 364, 246, 358, 314, 319, 314);

    fill(243, 228, 189);
    quad(326, 174, 350, 174, 353, 185, 323, 185);

    fill(243, 228, 189);
    ellipse(339, 127, 100, 100);

    fill('white');
    arc(339, 121, 100, 100, 110, 0);

    fill('white');
    ellipse(350, 134, 10, 10);
    ellipse(320, 134, 10, 10);

    fill('white');
    ellipse(348, 315, 25, 15);
    ellipse(323, 314, 25, 15);

    fill('white');
    ellipse(312, 119, 100, 10);
  }
}
