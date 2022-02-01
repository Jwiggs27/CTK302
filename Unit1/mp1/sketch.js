function setup() {
  createCanvas(700, 400);
  rectMode(CENTER);
}

function draw() {


  if (mouseIsPressed) {
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




  } else {
    background('white');


    quad(326, 174, 350, 174, 353, 185, 323, 185);

    fill('black');
    quad(312, 246, 364, 246, 358, 314, 319, 314);

    fill(243, 228, 189);
    ellipse(339, 127, 100, 100);

    fill('black');
    quad(310, 185, 365, 185, 372, 246, 303, 246);

    fill('black');
    arc(339, 121, 100, 100, 110, 0);

    fill(0);
    ellipse(350, 134, 10, 10);
    ellipse(320, 134, 10, 10);

    fill('white');
    ellipse(348, 315, 25, 15);
    ellipse(323, 314, 25, 15);

    fill('black');
    ellipse(370, 119, 100, 10);

    fill('black');
    arc(337, 150, 50, 30, 0, 3.14);

    fill(243, 228, 189);

  }


}
