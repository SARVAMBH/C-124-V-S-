function setup(){
    video = createCapture(VIDEO);
    video.size(550,550);
    canvas = createCanvas(550,550);
    canvas.position(700,150);

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' , gotPoses);
}

function draw() {
    background("dodgerblue");
}

function modelLoaded() {
    console.log('PoseNet Is Initialised');
}

function gotPoses(results) {
    if(results.length > 0)
    {
        console.log(results);
    }
}