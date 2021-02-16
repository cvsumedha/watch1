var h
var m
var s


function setup() {
  createCanvas(800,400);
  
}

function draw() {
  background(255,255,255);  
  
  translate(200,200);
  rotate(-90);

 // difining
  h=hour();
  m=minute();
  s=second();

  // map
  hAngle = map(h % 12,0,12,0,360);
  mAngle = map(m,0,6,0,360);
  sAngle = map(s,0,6,0,360);

  // h hand
  push();
  rotate(hAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,50,0);
  push();

  // m hand
  push();
  rotate(mAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,75,0);
  push();

  // s hand
  push();
  rotate(sAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  push();

  stroke(255,0,255);
  point(0,0);

  //arc
  strokeWeight(10);
  noFill();

  // h arc
  stroke(0,0,255);
  arc(0,0,300,300,0,hAngle);

  // m arc
  stroke(0,255,0);
  arc(0,0,280,280,0,mAngle);

  //s arc
  stroke(255,0,0);
  arc(0,0,260,260,0,sAngle);




}