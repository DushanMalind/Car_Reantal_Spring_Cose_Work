
var PI_2 = 2*Math.PI;

var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

var particles = [];

animate();

function randomColor(){
  var value = 500;
  var r = 50+(Math.floor(Math.random()*205));
  var g = 0;
  var b = 50+(Math.floor(Math.random()*205));
  return "rgba(" + r + "," + g + "," + b + ", 0.5)"
}

function Particle(x, y) {
  this.x = x;
  this.y = y;
  this.dy = 1 + (Math.random()*3);
  this.dx = -1 + (Math.random()*2);
  this.color = randomColor();
  this.size = 2 + Math.floor(Math.random()*4);
  this.draw = function(){
    context.beginPath();
    context.arc(this.x,this.y,this.size,0,PI_2,false)
    context.fillStyle = this.color;
    context.fill();
    this.update();
  }
  this.update = function(){
    this.y += this.dy;
    this.x += this.dx;
  }
}

canvas.addEventListener('mousemove', function(e) {

  var mouseX, mouseY;
  if(e.offsetX) {
    mouseX = e.offsetX;
    mouseY = e.offsetY;
  }
  else if(e.layerX) {
    mouseX = e.layerX;
    mouseY = e.layerY;
  }
  for(i=0; i<3; i++){
    var p = new Particle(mouseX, mouseY);
    particles.push(p);
  }
}, false);

function animate(){   context.clearRect(0,0,window.innerWidth,window.innerWidth);
  draw();
  window.requestAnimationFrame(animate);
}

function draw(){
  for(i=0; i<particles.length; i++){
    particles[i].draw();
  }
}

window.addEventListener("resize", function() {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
});
