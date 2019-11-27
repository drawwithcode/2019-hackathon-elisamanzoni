var rectangle;
var analyzer;

function preload(){
  tg1song = loadSound("./assets/TG1_bumper.mp3");
  tg1logo = loadImage("./assets/1200px-TG1.svg.png");

}

function setup() {
  createCanvas(windowWidth,windowHeight);

 analyzer = new p5.Amplitude();
 analyzer.setInput(tg1song);

 rectangleplay = new Rect(width/2, height/2, 100, 40);

}

function mousePressed() {
  if ( tg1song.isPlaying() ) {
    tg1song.pause();
  } else {
    tg1song.play();
  }
}


function draw() {

  background('black');
   var volume = 0
    volume = analyzer.getLevel();
    volume = map(volume,0,1,0,height);


    if ( tg1song.isPlaying() ) {
      noStroke();
      fill('yellow');
      textAlign(CENTER);
      textSize(30);
      textFont('Share Tech Mono');
      text('Click to pause', width/2, 100);
      imageMode(CENTER);
      image(tg1logo, width/2, height/2, (tg1logo.width/200)*volume/2.5, (tg1logo.height/200)*volume/2.5);
    } else {
      noStroke();
      fill('yellow');
      textAlign(CENTER);
      textSize(30);
      textFont('Share Tech Mono');
      text('Click to play', width/2, 100);

    }
    angleMode(DEGREES);
    rectMode(CENTER);
    translate(width / 2, height / 2);
    strokeWeight(volume/10)
    stroke('yellow');
    noFill();
    rect(0, 0, 2*volume+50, 2*volume+50);
    rect(0,0, 3*volume+50, 3*volume+50);
    rect(0,0, 4*volume+50, 4*volume+50);

    stroke(0,0,255);
    rotate(volume);
    rect(0,0, 2*volume+100, 2*volume+100);
    rect(0,0, 3*volume+100, 3*volume+100);
    rect(0,0, 4*volume+100, 4*volume+100);


    }





// function mouseClicked() {
//   background(255);
//   rectMode(CENTER);
//   rectangleplay.clickedplay();
//   return false;
// }

function Rect(_x, _y, _width, _height)
{

  this.x = _x;
  this.y = _y;
  this.width = _width;
  this.height = _height;
  this.color = 255;


  this.display = function() {
    fill(this.color);
    rect(this.x, this.y, this.width, this.height);


  }

  this.clickedplay = function() {
    this.color = 150;
        tg1song.play();
      background(200);
      fill('yellow');
      textAlign(CENTER);
      text('Play', width / 2, height / 2);
  }

}
