const canvas = document.querySelector(`#draw`);//grab canvas
const ctx = canvas.getContext('2d');//grabbing 2d context

//resizing canvas widht&height
canvas.width = window.innerWidth;
canvas.heigth = window.innerHeight;


ctx.strokeStyle = '#BADASS';//color
ctx.lineJoin = 'round';//rounds off the corners of a shape by filling an additional sector of disc centered at the common endpoint of connected segments
ctx.lineCap = 'round';//the ends of lines are rounded.
ctx.lineWidth = 20;
// ctx.globalCompositeOperation = 'multiply'; //lines will blend each other as user will draw over top of each other

let isDrawing = false;//flag that will tell us should we actually draw to this canvas or someone is just moving their mouse without doing anything

//creating starting&ending point for a line (where do you start & end the line)
let lastX = 0;
let lastY = 0;

let hue = 0;//HSL color
let direction = true;

//creating draw function, that will be called whenever person moves mouse on top of the canvas
function draw(e) {
  if (!isDrawing) return; // stop the fn from running when they are not moused down
  console.log(e);
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`; //https://mothereffinghsl.com/
  ctx.beginPath(); //start from 
  ctx.moveTo(lastX, lastY);//go to wherever the user's mouse is actually moving
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();//calling stroke to see the line(s)
  
  [lastX, lastY] = [e.offsetX, e.offsetY]; //once we're done with draw function, we want to update lastX and lastY variables to be wherever they were
  hue++;//increment (changing color)
  if (hue >= 360) {//reset
    hue = 0;
  }

  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) { //if it's greater than 100 or less than 1->flip the direction
    direction = !direction; //flip the direction
  }
  //line width, depending on what the current direction is, we either increment the line width or decrement it
  if (direction) {
    ctx.lineWidth++; //if direction is true, line width goes up
  } else {
    ctx.lineWidth--; //otherwise the line width goes down
  }
}

//making sure we won't start drawing from 0, 0:
canvas.addEventListener('mousedown', e => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY]; //updating lastX and lastY 
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => (isDrawing = false));
canvas.addEventListener('mouseout', () => (isDrawing = false));
