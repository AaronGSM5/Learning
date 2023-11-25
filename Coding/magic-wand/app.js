const wand = document.querySelector('.wand');
const wrapper = document.querySelector('.window')
//Detect touch device

wrapper.addEventListener("mousemove", (e) => {
    //PageX and PageY return the position of users cursor from top left of screen
    var x = (e.pageX - e.currentTarget.offsetLeft) / e.currentTarget.offsetWidth * 100
    var y = (e.pageY - e.currentTarget.offsetTop) / e.currentTarget.offsetHeight * 100
  
    var wandX = (100 * -0.15) + x * 1.15
    var wandY = 0.5 * y * 1
    console.log(wandY)
  
  
    wand.animate({
      left: `${wandX}%`,
      top: `${wandY}%`,
      rotate: `${-5+ (10 * x / 100)}deg`
    }, {duration: 400, fill:"forwards"})
    
    // TODO make if statements for singular hovers
    const numbers  = [1,2,3,4]

    numbers.forEach( (element) => {
      document.querySelector(`.blur${element}`).style.backdropFilter = `blur(${(100 - x) / 6}px)`
      document.querySelector(`.blur${element}`).style.opacity = `${1-(x/100)}`
    })

});

