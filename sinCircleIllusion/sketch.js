let greg; // me
let mj;   // mj
let chewko; // a dog we know
let shapa; // another dog
let grla; // mj's father
let group=[];


function setup() {
  createCanvas(windowHeight, windowHeight);
  background(0);
  angleMode(DEGREES);
  greg = new Ball(color(255,0,0),0);
  group.push(greg)
  mj = new Ball(color(0,255,0),120);
  group.push(mj);
  chewko = new Ball(color(0,0,255),220);
  group.push(chewko);
  shapa = new Ball(color(255,255,0),330);
  group.push(shapa);
  grla = new Ball(color(230,0,89),440);
  group.push(grla);
  print(group);
  
  
}

function draw() {
  //background(0);
  
  fill(0,10);
  rect(0,0,width,height);
  translate(width/2,height/2);
  
  for (let i =0; i<group.length;i++){
    push();
    rotate(group[i].a);
    group[i].updateY(frameCount % 360);
    group[i].show();
    pop();
    
  }
  
}
  
function mouseClicked(){
  
  let addball = new Ball(color(random(255), random(255), random(255)), random(360))
  group.push(addball);
  

}



// class in sketch
class Ball {
  constructor(c,a) {
    this.x = 0;
    this.y = 0;
    this.c = c; // color
    this.a = a; // angle

  }
  show() {
    push();
    translate(this.x-width/2,this.y-height/2);
    rotate(this.a);
    fill(this.c);
    stroke(22,18,3);
    ellipse(0,0, width/20, height/20);
    pop();
  }
  updateY(x) {  // just use this one and rotate to get the other angles
    this.y = map(sin(x + this.a), 0, 1, height/2, height/10); // from the middle to the edges
    this.x = width/2
   
  }
  updateX(y) { // dont use this one 
    this.x = map(cos(y), 0, 1, width/2, width/10);
  }
}