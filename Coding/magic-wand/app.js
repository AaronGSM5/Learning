const wand = document.querySelector('.wand');
const blur = document.querySelector('.blur')
const wrapper = document.querySelector('.window')
//Detect touch device

function move(e) {
  //PageX and PageY return the position of users cursor from top left of screen
  var x = e.pageX  * 100 / window.innerWidth
  var y = e.pageY  * 100 / window.innerHeight
  console.log(x)

  wand.style.transform = `rotate(${x/5}deg)`


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

