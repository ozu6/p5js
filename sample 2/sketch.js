// Click on the canvas to begin detecting key presses.

function setup() {
    createCanvas(100, 100);
  
    describe(
      'A gray square with a white square at its center. The white square turns black when the user presses a key.'
    );
  }
  
  function draw() {
    background(200);
  
    // Style the square.
    if (keyIsPressed === true) {
      fill(0);
    } else {
      fill(255);
    }
  
    // Draw the square.
    square(25, 25, 50);
  }