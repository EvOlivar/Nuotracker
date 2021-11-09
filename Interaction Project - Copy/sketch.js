function preload(){
firstdata = loadJSON('https://api.nutritionix.com/v1_1/search/taco%20bell?results=0:40&fields=item_name,brand_name,item_id,nf_calories&appId=1977d539&appKey=3b354c046a7985f6a86c01952ef32732%E2%80%94')

secData = loadJSON('https://api.nutritionix.com/v1_1/search/subway?results=0:40&fields=item_name,brand_name,item_id,nf_calories&appId=b2fa1d78&appKey=86784ebb10a935eaadab1691162e36b8%E2%80%94')

thirdData = loadJSON('https://api.nutritionix.com/v1_1/search/panda%20express?results=0:40&fields=item_name,brand_name,item_id,nf_calories&appId=b2fa1d78&appKey=86784ebb10a935eaadab1691162e36b8%E2%80%94')

forthData = loadJSON('https://api.nutritionix.com/v1_1/search/starbucks?results=0:40&fields=item_name,brand_[%E2%80%A6]d=df424f78&appKey=1f8b95b6f45634e62df2e7d214944034%E2%80%94')
}

function setup() {
  createCanvas (1250,750);

  textSize(50);
  text('Nuotraker',550,100);
  fill(0);

  textSize(20);
  text('Recommended Daily Calories - Women: 2000, Men: 2500',400,150);
  fill(0);

  textSize(20);
  text('2070 Calories at Taco Bell',440,620);
  fill(0);

  rect(850, 300, 40, 40);
  text('Chrunchy Taco Supreme',900,325);

  rect(850, 350, 40, 40);
  text('Nachos BellGrande',900,375);

  rect(850, 400, 40, 40);
  text('Quesadilla Chicken',900,425);

  rect(850, 450, 40, 40);
  text('Beef Quesarito',900,475);

  rect(80, 200, 180, 60);
  text('TacoBell',80,190);

  rect(80, 300, 180, 60);
  text('Pizza Hut',80,290);

  rect(80, 400, 180, 60);
  text('Starbucks',80,390);

  rect(80, 500, 180, 60);
  text('Panda Express',80,490);
}

function draw() {
  var taco = firstdata.hits[7].fields.nf_calories; //Crunchy Taco Supreme, 190
  var nachos = firstdata.hits[12].fields.nf_calories; //Nachos BellGrande, 730
  var quesadilla = firstdata.hits[24].fields.nf_calories; //Quesadilla Chicken, 510
  var twist = firstdata.hits[26].fields.nf_calories; //Cinnamon Twists, 170
  var quesarito = firstdata.hits[39].fields.nf_calories; //Beef Quesarito, 640
  var bajablast = firstdata.hits[17].fields.nf_calories; //Taco Bell Original, Baja Blast, 170
  //total: 2070 (ignore twist and baja)

  var one = (taco/575)*100; //33
  var two = (nachos/575)*100; //127
  var three = (quesadilla/575)*100; //89
  var four = (quesarito/575)*100;//111

  var numbers = [one,two,three,four];

  colorMode(HSB, 360, 100, 100, 100);
  noStroke();
  noLoop();
  var diameter = 300;
  var lastAngle = 0;
  for (var i = 0; i < numbers.length; i++){
    var n = numbers[i];
    var c = map(n, 0, max(numbers), 0 ,100);
    fill(0, 100, c);
    arc(550, 400, diameter, diameter, lastAngle, lastAngle + radians(numbers[i]));
    lastAngle += radians(numbers[i]);
  }
}
