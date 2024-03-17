const darkSquareCont = document.getElementById('dark-square-cont')
const lightSquareCont = document.getElementById('light-square-cont')
const nameEffect = document.getElementById('name-effect')

nameEffect.addEventListener('mousemove', (e) => {
  let x = e.clientX / window.innerWidth * 15
  let y = e.clientY / window.innerHeight * 15

  x-= 7.5
  y-= 7.5

  // darkSquareCont.style.transform = `translateY(${y * 2}%)`
  // lightSquareCont.style.transform = `translateY(${y * 1.5}%)`

  darkSquareCont.animate(
    {transform: `translateY(${y}%)`},
    {fill: "forwards", duration: 1000}
  )
  lightSquareCont.animate(
    {transform: `translateY(${y}%)`},
    {fill: "forwards", duration: 1000}
  )
})

const allgemein = document.getElementById('allgemein')

allgemein.addEventListener('click', () => {
  document.getElementById('allgemein1').style = 'transform: translate(-50%,-50%); scale: 1;'
  document.getElementById('allgemein2').style = 'transform: translate(-50%,-50%); scale: 1;'
  document.getElementById('allgemein3').style = 'transform: translate(-50%,-176%); scale: 1;'
  document.getElementById('allgemein4').style = 'transform: translate(-50%,-176%); scale: 1;'

  setTimeout(() => {
    document.getElementById('allgemein3').style = 'transform: translate(-50%,-50%); scale: 1;'
    document.getElementById('allgemein4').style = 'transform: translate(-50%,-50%); scale: 1;'
  }, 300);
})

//!!Think about animation for cards!!



