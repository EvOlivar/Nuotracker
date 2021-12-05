function preload(){
bg = loadImage('images/first-pie-screen.png');

firstdata = loadJSON('https://api.nutritionix.com/v1_1/search/starbucks?results=0:40&fields=item_name,brand_name,item_id,nf_calories&appId=1977d539&appKey=3b354c046a7985f6a86c01952ef32732%E2%80%94')

secData = loadJSON('https://api.nutritionix.com/v1_1/search/subway?results=0:40&fields=item_name,brand_name,item_id,nf_calories&appId=b2fa1d78&appKey=86784ebb10a935eaadab1691162e36b8%E2%80%94')

thirdData = loadJSON('https://api.nutritionix.com/v1_1/search/panda%20express?results=0:40&fields=item_name,brand_name,item_id,nf_calories&appId=b2fa1d78&appKey=86784ebb10a935eaadab1691162e36b8%E2%80%94')
}

function setup() {
  createCanvas (1250,750);
  background(bg);

//Pie Chart Placeholder
  noStroke();
  fill(255, 0, 0, 63);
  circle( 600, 400, 300);

 //Buttons
  stroke(51);
  noFill();
  rect(81, 241, 220, 64);

  stroke(51);
  noFill();
  rect(81, 326, 220, 63);

  stroke(51);
  noFill();
  rect(81, 410, 220, 64);

  stroke(51);
  noFill();
  rect(81, 495, 220, 63);

  stroke(51);
  noFill();
  rect(81, 579, 220, 63);
}

function draw() {
}


function mousePressed(){
//Orange Chicken Button
 if(mouseX>81 && mouseX<280 && mouseY>241 && mouseY < 300){
   stroke(255,0,0);
   noFill();
   rect(81, 241, 220, 64);

   colorMode(HSB);
   angleMode(DEGREES);

   noStroke();
   pieChart(600, 400);

   textSize(20);
   text('490',800,400);
  }

//Rice Button
 // if(mouseX>81 && mouseX<280 && mouseY>326 && mouseY < 385){
 //   stroke(255,0,0);
 //   noFill();
 //   rect(81, 326, 220, 63);
 //
 //   colorMode(HSB);
 //   angleMode(DEGREES);
 //
 //   noStroke();
 //   pieChart(600, 400);
 //
 //   textSize(20);
 //   text('520',800,500);
 // }

}

function pieChart(x, y) {
  var pChicken = thirdData.hits[7].fields.nf_calories; //Orange Chicken, 490
  var pRice = thirdData.hits[25].fields.nf_calories; //Fried Rice, 520
  var pVegi = thirdData.hits[1].fields.nf_calories; //Super Greens, 90
  var pBeef = thirdData.hits[5].fields.nf_calories; //Beijing Beef, 470
  var pTofu = thirdData.hits[3].fields.nf_calories; //Eggplant Tofu, 340


  var [total, pChicken, pRice, pVegi, pBeef, pTofu] = [1910, 490, 520, 90, 470, 340];

  var startValue = 0;
  var range = 0;

  //pChicken slice
  range = pChicken / total;
  drawSlice("indianred", x, y, 300, startValue, startValue + range);
  startValue += range;

  //pRice slice
  // range = pRice / total;
  // drawSlice("salmon", x, y, 300, startValue, startValue + range);
  // startValue += range;

  // //pVegi slice
  // range = pVegi / total;
  // drawSlice("maroon", x, y, 300, startValue, startValue + range);
  // startValue += range;

  // //pBeef slice
  // range = pBeef / total;
  // drawSlice("coral", x, y, 300, startValue, startValue + range);
  // startValue += range;

  // //pTofu slice
  // range = pTofu / total;
  // drawSlice("firebrick", x, y, 300, startValue, startValue + range);
  // startValue += range;

}

function drawSlice(fColor, x, y, d, percent1, percent2) {
  fill(fColor);
  arc(x, y, d, d, -90 + percent1 * 360, -90 + percent2 * 360);
}
