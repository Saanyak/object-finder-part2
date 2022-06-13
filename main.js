status = "";
input_text = "";

function setup() {
    canvas = createCanvas(400,390);
    canvas.position(600,300);
    video = createCapture(VIDEO);
    video.size(400,390);
    video.hide();
}

function start() {
    object_detector = ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    input_text = document.getElementById("input_id").value;
}

function modelLoaded() {
    console.log("Model Loaded");
    status = true;
}

function draw() {
    image(video,0,0,400,390);
}