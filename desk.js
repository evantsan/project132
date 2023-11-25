sstatus= "";
function preload(){
    img = loadImage('default_name.webp');
  }
  function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
  }
  function modelLoaded() {
    console.log("Model Loaded!")
    sstatus = true;
    objectDetector.detect(img, gotResult);
  }
function gotResult()
{

}
function draw()
{
    image(img, 0, 0, 640, 420);
}
  