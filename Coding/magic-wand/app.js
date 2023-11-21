const wand = document.querySelector('.wand');
const blur = document.querySelector('.blur')
const wrapper = document.querySelector('.window')
//Detect touch device

wrapper.addEventListener("mousemove", (e) => {
    //PageX and PageY return the position of users cursor from top left of screen
    const x = (e.pageX - e.currentTarget.offsetLeft) / e.currentTarget.offsetWidth * 100
    const y = (e.pageY - e.currentTarget.offsetTop) / e.currentTarget.offsetHeight * 100
  
    var wandX = (x * -0.15) + x * 1.15
    var wandY = (y * -0.5) + y * 1.15
  
  
    wand.animate({
      left: `${wandX}%`,
      top: `${wandY}%`,
      rotate: `${-5+ (10 * x / 100)}deg`
    }, {duration: 400, fill:"forwards"})
  
  
    //set left and top of div based on mouse position
  
  
      blur.style.backdropFilter = `blur(${(x * 2/10-4)}px)`

      //CHange blur
      //Edit position of wand

});

