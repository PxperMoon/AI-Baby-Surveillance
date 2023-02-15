video = "";
objects = ["person"];

function preload() {
    alarm = loadSound("emergency_alarm_tone.mp3");
}

function setup() {
    canvas = createCanvas(480, 380);
    canvas.center();
    background("white");
    video = createCapture(VIDEO);
	video.size(480, 380);
    video.hide();
}

function start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded() {
    console.log("Model is loaded.");
    status = true;
}

function draw() {
    image(video, 0, 0, 480, 380);

    if(objects.length == 0) {
        objectDetector.detect(video, objects);
        for(i=0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "Status: Baby NOT Detected";
            console.log("Baby NOT Detected");
            alarm.play();
        }
    }
}
