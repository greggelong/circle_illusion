let greg; // me
let mj;   // mj
let chewko; // a dog we know


function setup() {
  createCanvas(windowHeight, windowHeight);
  background(0);
  angleMode(DEGREES);
  greg = new Ball(color(128,28,13));
  mj = new Ball(color(254,165,83));
  chewko = new Ball(color(105,138,143));
  
}

function draw() {
  //background(0);
  fill(127,146,99,10);
  rect(0,0,width,height);
  greg.updateY(frameCount % 360);
  greg.show();
  mj.updateX(frameCount% 359);
  mj.show();
  chewko.updateY(frameCount % 360);
  chewko.updateX(frameCount % 360);
  chewko.show();

}
// class in sketch
class Ball {
  constructor(c) {
    this.x = width/2;
    this.y = height/2;
    this.c = c;

  }
  show() {
    
    fill(this.c);
    stroke(22,18,3);
    ellipse(this.x,this.y, width/10, height/10);
  
  }
  updateY(x) {
    this.y = map(sin(x), 0, 1, height/2, height/10); // from the middle to the edges
   
  }
  updateX(y) {
    this.x = map(cos(y), 0, 1, width/2, width/10);
  }
}