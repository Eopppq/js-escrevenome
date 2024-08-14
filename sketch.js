function setup() {
    createCanvas(700, 550);
    background("white");
  }
  
  function draw() {
    
    stroke("purple");
    fill("black");
  
    // console.log(mouseIsPressed);
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }