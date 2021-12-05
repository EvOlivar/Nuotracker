function preload(){
bg = loadImage('images/first-pie-screen.png');

firstdata = loadJSON('https://api.nutritionix.com/v1_1/search/taco%20bell?results=0:40&fields=item_name,brand_name,item_id,nf_calories&appId=1977d539&appKey=3b354c046a7985f6a86c01952ef32732%E2%80%94')

secData = loadJSON('https://api.nutritionix.com/v1_1/search/subway?results=0:40&fields=item_name,brand_name,item_id,nf_calories&appId=b2fa1d78&appKey=86784ebb10a935eaadab1691162e36b8%E2%80%94')

thirdData = loadJSON('https://api.nutritionix.com/v1_1/search/panda%20express?results=0:40&fields=item_name,brand_name,item_id,nf_calories&appId=b2fa1d78&appKey=86784ebb10a935eaadab1691162e36b8%E2%80%94')
}

function setup() {
  createCanvas (1250,750);
  background(bg);

  stroke(51);
  noFill();
  rect(81, 241, 220, 63);

  stroke(51);
  noFill();
  rect(81, 326, 220, 63);

  noStroke();
  noLoop();
}

function draw() {
  // var orangechicken = thirdData.hits[7].fields.nf_calories; //Orange Chicken, 490
  // var rice = thirdData.hits[25].fields.nf_calories; //Fried Rice, 520
  // var vegimix = thirdData.hits[1].fields.nf_calories; //Super Greens, 90
  // var beef = thirdData.hits[5].fields.nf_calories; //Beijing Beef, 470
  // var tofu = thirdData.hits[3].fields.nf_calories; //Eggplant Tofu, 340
  // //total: 1910
  //
  // var one = (orangechicken/5.55); //88.3
  // var two = (rice/5.55); //93.7
  // var three = (vegimix/5.55); //16.2
  // var four = (beef/5.55);//84.7
  // var five = (tofu/5.55);//61.2


  // ///Subway/////
  //   var wFTmelt = secData.hits[14].fields.nf_calories; //Footlong Subway Melt, 820
  //   var wSmelt = secData.hits[17].fields.nf_calories; //6 inch Subway Melt, 410
  //   var wFTclub = secData.hits[18].fields.nf_calories; //Footlong Subway Club, 620
  //   var wSbeef = secData.hits[34].fields.nf_calories; //6 inch Roast Beef, 320

  var angles = [360];

  pieChart(300, angles);

function pieChart(diameter, data) {
  let lastAngle = 0;
  for (let i = 0; i < data.length; i++) {
    let gray = map(i, 0, data.length, 0, 255);
    fill(gray);
    arc(
      width / 2,
      height / 2,
      diameter,
      diameter,
      lastAngle,
      lastAngle + radians(angles[i])
    );
    lastAngle += radians(angles[i]);
  }
}
}


function mousePressed(){
 if(mouseX>81 && mouseX<280 && mouseY>241 && mouseY < 300){
  textSize(20);
   text('490',800,400);
   var orangechicken = thirdData.hits[7].fields.nf_calories; //Orange Chicken, 490
   var one = (orangechicken/5.55); //88.3
   var angles = [one,272];

   pieChart(300, angles);

 function pieChart(diameter, data) {
   let lastAngle = 0;
   for (let i = 0; i < data.length; i++) {
     let gray = map(i, 0, data.length, 0, 255);
     fill(gray);
     arc(
       width / 2,
       height / 2,
       diameter,
       diameter,
       lastAngle,
       lastAngle + radians(angles[i])
     );
     lastAngle += radians(angles[i]);
   }

 }
}
//Add 70 to the last mouse y
 if(mouseX>81 && mouseX<280 && mouseY>326 && mouseY < 385){
  textSize(20);
  text('1010',800,400);
  var orangechicken = thirdData.hits[7].fields.nf_calories; //Orange Chicken, 490
  var one = (orangechicken/5.55); //88.3
  var rice = thirdData.hits[25].fields.nf_calories; //Fried Rice, 520
  var two = (rice/5.55); //93.7

  var angles = [one, two, 178];

  pieChart(300, angles);

function pieChart(diameter, data) {
  let lastAngle = 0;
  for (let i = 0; i < data.length; i++) {
    let gray = map(i, 0, data.length, 0, 255);
    fill(gray);
    arc(
      width / 2,
      height / 2,
      diameter,
      diameter,
      lastAngle,
      lastAngle + radians(angles[i])
    );
    lastAngle += radians(angles[i]);
  }
}
}
}
