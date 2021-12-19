img = "";
objects = [];
status = ""

function preload() {
    img = loadImage("dog_cat.jpg");
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status - Detecting Objects";
}

function modelLoaded() {
    console.log("Model Loaded")
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results){
    if (error){
        console.log(error);
    }
    else {
        console.log(results);
        objects = results;
    }
}

function draw() {

    image(img, 0, 0, 640, 420);

    if (status != ""){
       for (var i = 0 ; i < objects.length ; i++){
           document.getElementById("status").innerHTML = "Status - Objects Detected";
           fill("red");
           text(objects[i].label);
       }
    }
}
    fill("red");
    text("Dog", 45, 75);
    text("Cat", 280, 115);
    text("Bowl", 280, 325);
    noFill();
    stroke("red");
    rect(40, 60, 450, 350);
    rect(275, 100, 285, 300);
    rect(275, 310, 120, 100);