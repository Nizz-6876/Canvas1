var currentPath=[],drawing=[];
var canvas,drawingStroke;


function setup(){
  canvas=createCanvas(windowWidth,windowHeight);
  canvas.mousePressed(startPath);
  canvas.mouseReleased(endPath);
  
}


function draw(){
  background("white");

  if (mouseIsPressed) {
    var point={x:mouseX,y:mouseY};
    currentPath.push(point); 
  }
  
  noFill();
  strokeWeight(4);
  
  text("PAINT HERE WITH YOUR MOUSE",windowWidth/2,20);

  for (var index = 0; index < drawing.length; index++) {
    var path=drawing[index];
    console.log(path);
    stroke(drawing[index].colorRed,drawing[index].colorGreen,drawing[index].colorBlue)
    beginShape();
    for (var i = 0; i < path.length; i++) {
      vertex(path[i].x,path[i].y)
      
    }
    endShape();
    
  }
 
}

function startPath(){
  currentPath=[];
  drawing.push(currentPath);
  drawingStroke={
    colorRed:random(0,255),
    colorGreen:random(0,255),
    colorBlue:random(0,255)
    
  }
  drawing.push(drawingStroke);

}

function endPath(){
  
}