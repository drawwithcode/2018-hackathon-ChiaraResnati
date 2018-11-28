//LOAD SOUNDS

var mySong;
var logo;
var candle;
var spider;
var skull;

var iterator = 0;
var iterator2 = 0;
var xz;
var yz;

function preload() {
  mySong = loadSound('./assets/mainTheme.mp3')
  logo = loadImage("./assets/logo.png");
  candle = loadImage("./assets/candle.png");
  spider = loadImage("./assets/spider.png");
  skull = loadImage("./assets/skull.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  mySong.play();
  imageMode(CENTER);


  analyzer = new p5.Amplitude();
  analyzer.setInput(mySong);


}

function draw() {
  iterator ++
  iterator2 ++

  xz1 = width/4*3;
  xz2 = width/4;
  yz = height - iterator2;

  volume = analyzer.getLevel();
  volume = map(volume,0,1,0,height);

  background(0);

  xz1 = xz1 + random(-0.5, 0.5);
  xz2 = xz2 + random(-0.5, 0.5);

  if (yz < 0) {
    yz = height;
    iterator2 = 0
  }

  image(skull, xz1, yz, 50 + iterator2/2, 60 + iterator2/2);
  image(skull, xz2, yz, 50 + iterator2/2, 60 + iterator2/2);



  var x = noise(iterator/20)*width;
  var y = noise(iterator/40)*height;

  image(spider, x, y, 40, 40)

  var x1 = noise(iterator/30)*width;
  var y1 = noise(iterator/20)*height;

  image(spider, x1, y1, 40, 40)

  var x2 = noise(iterator/40)*width;
  var y2 = noise(iterator/20)*height;

  image(spider, x2, y2, 40, 40)




  noStroke()
  fill(255, 250, 170, volume)
  ellipse(width/2,height/2-100, 30+volume)

  stroke(200)
  noFill()
  ellipse(width/2,height/2-100, 70+volume)

  image(logo, width/2, height/4*3, width/3 + volume/5, width/3 *0.3875 + volume/5);
  image(candle, width/2, height/2-50, 200, 150);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
