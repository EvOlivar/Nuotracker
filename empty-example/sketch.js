var startScreen;
function preload(){
  startScreen = loadImage('Images/title-math.png');
}

function setup() {
createCanvas(800,800);

}

function draw() {
  background(220);
  image(startScreen,100,100);
}
