var rectangle;
var analyzer;
var date, hours, minutes, seconds;

function preload() {
  tg1song = loadSound("./assets/TG1_bumper.mp3");
  tg1logo = loadImage("./assets/1200px-TG1.svg.png");
  position = getCurrentPosition();
}

function setup() {
  console.log(position);
  intervalCurrentPosition(showPosition, 1000);

  createCanvas(windowWidth, windowHeight);
  analyzer = new p5.Amplitude();
  analyzer.setInput(tg1song);
}

function mousePressed() {
  if (tg1song.isPlaying()) {
    tg1song.pause();
  } else {
    tg1song.play();
  }
}


function draw() {
  background('gray');
  var volume = 0
  volume = analyzer.getLevel();
  volume = map(volume, 0, 1, 0, height);

  var date = new Date;
  hours = date.getHours();
  minutes = '0' + date.getMinutes();
  seconds = '0' + date.getSeconds();
  var formattedTime = hours + ":" + minutes.substr(-2) + ':' + seconds.substr(-2);



  if (tg1song.isPlaying()) {
    if (keyIsPressed) {
      //color mode
      push();
      background('black');
      angleMode(DEGREES);
      rectMode(CENTER);
      translate(width / 2, height / 2);
      strokeWeight(volume / 10)
      stroke('yellow');
      noFill();
      rect(0, 0, 2 * volume + 50, 2 * volume + 50);
      rect(0, 0, 3 * volume + 50, 3 * volume + 50);
      rect(0, 0, 4 * volume + 50, 4 * volume + 50);

      stroke(0, 0, 255);
      rotate(volume);
      rect(0, 0, 2 * volume + 100, 2 * volume + 100);
      rect(0, 0, 3 * volume + 100, 3 * volume + 100);
      rect(0, 0, 4 * volume + 100, 4 * volume + 100);
      pop();}

      else {
        //gray mode
        push();
        background('gray');
        angleMode(DEGREES);
        rectMode(CENTER);
        translate(width / 2, height / 2);
        strokeWeight(volume / 10)
        stroke('lightGray');
        noFill();
        rect(0, 0, 2 * volume + 50, 2 * volume + 50);
        rect(0, 0, 3 * volume + 50, 3 * volume + 50);
        rect(0, 0, 4 * volume + 50, 4 * volume + 50);

        rotate(volume);
        rect(0, 0, 2 * volume + 100, 2 * volume + 100);
        rect(0, 0, 3 * volume + 100, 3 * volume + 100);
        rect(0, 0, 4 * volume + 100, 4 * volume + 100);
        pop();
      }

    //instructions
    noStroke();
    fill('white');
    textAlign(CENTER);
    textSize(20);
    textFont('Share Tech Mono');
    text('Click to pause', width / 2, 50);
    imageMode(CENTER);
    image(tg1logo, width / 2, height / 2, (tg1logo.width / 200) * volume / 2.5, (tg1logo.height / 200) * volume / 2.5);
    textAlign(CENTER);
    textSize(20);
    textFont('Share Tech Mono');
    text('PRESS ANY KEY TO DISCOVER COLORS', width / 2, 80);

  } else {
    //gray mode
    //instructions
    noStroke();
    fill('white');
    textAlign(CENTER);
    textSize(20);
    textFont('Share Tech Mono');
    text('Click anywhere to watch it', width / 2, windowHeight/2+60);
    //time
      noStroke();
      textAlign(CENTER);
      fill('white');
      textFont('VT323');
      textSize(50);
      text("IT'S TIME FOR TG!",windowWidth/2,windowHeight/2-60);
      text(formattedTime,windowWidth/2,windowHeight/2);

  }




}

function showPosition(position){
  console.log(position);}
