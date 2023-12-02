const target = document.getElementById('target')

function moveTarget() {
  target.style.left = `${Math.random()*100}%`
  target.style.top = `${Math.random()*100}%`
}

moveTarget();

target.addEventListener('click', () => {
  moveTarget();
})