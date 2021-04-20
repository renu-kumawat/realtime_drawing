noseX=0;
noseY=0;
leftWristX=0;
rightWristY=0;
difference=0;
function preload(){

}
function draw(){
background("#FF0000");
fill("#0000FF");
stroke("#0000FF")
square(noseX,noseY,difference);
document.getElementById("size").innerHTML="width & height of the square will be"+difference;
}
function setup(){
    video=createCapture(VIDEO);
    video.size(560,560);
    canvas=createCanvas(550,550);
    canvas.position(560,150);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses)
}
function modelLoaded(){
    console.log("poseNetIsInitialized");
}
function gotPoses(results){
    if(results.length>0){
        console.log("results");
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log(noseX,noseY);
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX);
    }
}
