const wand = document.querySelector('.wand');
const blur = document.querySelector('.blur')
const wrapper = document.querySelector('.window')
//Detect touch device

wrapper.addEventListener("mousemove", (e) => {
    //PageX and PageY return the position of users cursor from top left of screen
    const x = (e.pageX - e.currentTarget.offsetLeft) / e.currentTarget.offsetWidth * 100
    const y = (e.pageY - e.currentTarget.offsetTop) / e.currentTarget.offsetHeight * 100
  
    var wandX = (100 * -0.2) + x * 1.2
    var wandY = (y * -0.5) + y * 1.15
    console.log(wandY)
  
  
    wand.animate({
      left: `${wandX}%`,
      top: `${wandY}%`,
      rotate: `${-5+ (10 * x / 100)}deg`
    }, {duration: 400, fill:"forwards"})

    blur.animate({
      backdropFilter: `blur(${(100 - x) / 5 }px)`
    }, {duration: 400, fill:"forwards"})
  
  
    //set left and top of div based on mouse position
  
  
      blur.style.backdropFilter = `blur(${(100 - x) / 20 }px)`

      //CHange blur
      //Edit position of wand

});

