const container = document.querySelector('.container')

let allowEffect = true
let index = 0

container.addEventListener('mousemove', (e) =>  {
  if (allowEffect) {
    allowEffect = false
    let mouseX = (e.pageX / window.innerWidth) * 100
    let mouseY = (e.pageY / window.innerHeight) * 100

    const randomNumber = 3 - (Math.random() * 6)
    const randomRotation = 45 - (Math.random() * 90)
    const randomSize = 20 + Math.random() * 20

    mouseX += randomNumber
    mouseY += randomNumber

  
    container.innerHTML += 
    `<div class="effect" style="left: ${mouseX}%; top: ${mouseY}%; rotate: ${randomRotation}deg; width: ${randomSize}px;" >
    <img src="https://static.vecteezy.com/system/resources/thumbnails/011/024/361/small/digital-glowing-light-effect-free-png.png">
    </div>`

    setTimeout(() => {
      allowEffect  = true
    }, 100);

    setTimeout(() => {
      container.childNodes[0].style = 'opacity:0;'
      setTimeout(() => {
        container.removeChild(container.childNodes[0])
      }, 500);
    }, 400);
  }
})

