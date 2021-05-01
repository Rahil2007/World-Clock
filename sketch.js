const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImage
var bg ;
var hour;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;
}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImage){
        background(backgroundImage);
    } else {
        background("lime");
    }

    Engine.update(engine);

    // write code to display time in correct format here
    if(backgroundImage && hour < 12){
    fill("black");
    textSize(32);
    text("Time:- " + hour + ":00 AM",30,50);
    }else if(backgroundImage && hour >= 12 ){
        fill("black");
        textSize(32);
        text("Time:- " + hour + ":00 PM",30,50);
    }
}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("https://worldtimeapi.org/api/ip");
    var responseJSON = await response.json()
    var dateTime = responseJSON.datetime;
    hour = dateTime.slice(11,13);

    console.log(hour);
    
    if(hour >= 4 && hour< 6){
        bg = "sunrise1.png";
    } else if(hour >=6 && hour< 8){
        bg = "sunrise2.png";
    }
    else if(hour >=8 && hour< 10){
        bg = "sunrise3.png";
    }
    else if(hour >=10 && hour< 12){
        bg = "sunrise4.png";
    }
    else if(hour >=12 && hour< 14){
        bg = "sunrise5.png";
    }
    else if(hour >=14 && hour< 16){
        bg = "sunrise6.png";
    }
    else if(hour >=16 && hour< 18){
        bg = "sunset7.png";
    }
    else if(hour >=18 && hour< 19){
        bg = "sunset8.png";
    }
    else if(hour >=19 && hour< 20){
        bg = "sunset9.png";
    }
    else if(hour >=20 && hour< 4){
        bg = "sunset10.png";
    }

    backgroundImage = loadImage(bg);
}
