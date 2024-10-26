let btn1;
let btn2;

let slider;

let naniSFX;
function preload() {
  naniSFX = loadSound("naniSFX.mp3");
}

function setup() {
  createCanvas(400, 400); // width, height

  frameRate(1);
  
  slider = createSlider(0, 100000);
  slider.position(20, 150);

  btn1 = createButton("Click me!");
  btn1.position(random(0, 400), random(0, 400));
  btn1.mousePressed(greet);

  btn2 = createButton("Don't u dare!?");
  btn2.position(0, 400);
  btn2.mousePressed(away);
}

function draw() {
  background(220);

  text("x: " + mouseX, 20, 20);
  text("y: " + mouseY, 20, 40);

  let btnL = btn1.x;
  let btnR = btnL + btn1.width;
  let btnT = btn1.y;
  let btnB = btnT + btn1.height;

  if (mouseX > btnL && mouseX < btnR && mouseY > btnT && mouseY < btnB) {
    btn1.position(random(0, 400), random(0, 400));
  }
}

function greet() {
  naniSFX.play();
  window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
}

function away() {
  print("Go away!");
}
