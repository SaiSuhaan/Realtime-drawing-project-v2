function setup() {
    video = createCapture(VIDEO);
    video.size(550, 550);
    video.position(100, 100)

    canvas = createCanvas(550, 550);
    canvas.position(800, 100);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results) {
    if(results.length > 0);
   {
    console.log(results);
   }
}

function modelLoaded() {
    console.log('PoseNet is Initialized!');
}

function draw() {
    background('#3333cc');
}