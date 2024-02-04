const container = document.querySelector('.effects')

let allowEffect = true
let index = 0

let effectIndex = 0

container.addEventListener('mousemove', (e) =>  {
  var mouseX = (e.pageX - e.currentTarget.offsetLeft) / e.currentTarget.offsetWidth * 100
  var mouseY = (e.pageY - e.currentTarget.offsetTop) / e.currentTarget.offsetHeight * 100

  const randomRotation = 45 - (Math.random() * 90)
  const randomSize = 1 + Math.random() * 2
  if (allowEffect) {
    allowEffect = false

    effectIndex++

    container.innerHTML += 
    `<div id="effectN${effectIndex}" class="effect" style="left: ${mouseX}%; top: ${mouseY}%; transform: rotate(${randomRotation}deg); width: ${randomSize}%;">
    <svg class="star-svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path stroke='${randomColors()}' d="M12 3L14.0357 8.16153C14.2236 8.63799 14.3175 8.87622 14.4614 9.0771C14.5889 9.25516 14.7448 9.41106 14.9229 9.53859C15.1238 9.68245 15.362 9.77641 15.8385 9.96432L21 12L15.8385 14.0357C15.362 14.2236 15.1238 14.3175 14.9229 14.4614C14.7448 14.5889 14.5889 14.7448 14.4614 14.9229C14.3175 15.1238 14.2236 15.362 14.0357 15.8385L12 21L9.96432 15.8385C9.77641 15.362 9.68245 15.1238 9.53859 14.9229C9.41106 14.7448 9.25516 14.5889 9.0771 14.4614C8.87622 14.3175 8.63799 14.2236 8.16153 14.0357L3 12L8.16153 9.96432C8.63799 9.77641 8.87622 9.68245 9.0771 9.53859C9.25516 9.41106 9.41106 9.25516 9.53859 9.0771C9.68245 8.87622 9.77641 8.63799 9.96432 8.16153L12 3Z"  stroke-width="2px" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    </div>`

    setTimeout(() => {
      allowEffect  = true
    }, 200);

    removeEffect(effectIndex)


  }
  document.querySelector('.shadow').style = `left: ${mouseX}%; top: ${mouseY}%;`
})

function randomColors() {
  const colors = ['var(--primary)', 'var(--accent)'] 
  const randomNumber = Math.round(Math.random()) // Gives 1 or a 0
  let choosenColor = colors[randomNumber] // Put 1 or 0 as Index
  return choosenColor;
}

function removeEffect(effectIndex) {

  const randomDirectionY= Math.random() * 200

  setTimeout(() => {
    document.getElementById(`effectN${effectIndex}`).animate({
      transform: `translateY(100%)`,
      opacity: 0.5
    }, {duration: 200}
    )
  }, 0);

  setTimeout(() => {
    document.getElementById(`effectN${effectIndex}`).remove();
  }, 200);
}
