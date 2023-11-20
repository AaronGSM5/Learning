const wand = document.querySelector('.wand');
const blur = document.querySelector('.blur')
//Detect touch device

function move(e) {
  //PageX and PageY return the position of users cursor from top left of screen
  var x = e.pageX * 100 / window.innerWidth
  var y = e.pageY * 100 / window.innerHeight

  if (x > 20 && x < 45) {wand.style.transform = 'rotate(-5deg)';}
  if (x > 45 && x < 55) {wand.style.transform = 'rotate(0deg)'}
  if (x > 55 && x < 80) {wand.style.transform = 'rotate(5deg)'}

  //set left and top of div based on mouse position
  wand.style.left = x   + "%";
  wand.style.top = y   + "%";

  if (x > 20 && x < 80 && y < 75 ) {
    blur.style.backdropFilter = `blur(${x * 2/10-4}px)`
  }

  
};
//For mouse
document.addEventListener("mousemove", (e) => {
  move(e);
});