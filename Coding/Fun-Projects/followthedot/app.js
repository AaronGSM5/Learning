const dot = document.getElementById('dot')
const difficultiesElement = document.querySelector('.difficulties')

let currentPositionX = 50
let currentPositionY = 50
let interval;

const difficulties = [
  300, //very easy
  200, //easy
  100, //medium
  80, //hard
  30, //very hard
  20, //deadly
  1, //impossible
]
let choosenDifficulty = difficulties[0]

function moveToRandomPosition() {
  clearInterval(interval)
  const randomX = Math.round(Math.random() * 100)
  const randomY = Math.round(Math.random() * 100)

  interval = setInterval(() => {
    if (randomX !== currentPositionX) {
      if (currentPositionX > randomX) {currentPositionX--}
      if (currentPositionX < randomX) {currentPositionX++}
    }

    if (randomY !== currentPositionY) {
      if (currentPositionY > randomY) {currentPositionY--}
      if (currentPositionY < randomY) {currentPositionY++}
    }

    else {
      clearInterval(interval)
      moveToRandomPosition()
    }

    dot.animate({
      left: `${currentPositionX}%`,
      top: `${currentPositionY}%`
    }, {duration: choosenDifficulty, fill:"forwards"})

  }, choosenDifficulty);
}

function chooseDifficulty(difficulty) {
  for (let index = 1; index/2 <= difficultiesElement.childElementCount; index +=2) {
    difficultiesElement.childNodes[index].style.opacity = 0.5
    }
  
  if (difficulty === 'very easy') {choosenDifficulty = difficulties[0];difficultiesElement.childNodes[1].style.opacity = 1}
  if (difficulty === 'easy') {choosenDifficulty = difficulties[1];difficultiesElement.childNodes[3].style.opacity = 1}
  if (difficulty === 'medium') {choosenDifficulty = difficulties[2];difficultiesElement.childNodes[5].style.opacity = 1}
  if (difficulty === 'hard') {choosenDifficulty = difficulties[3];difficultiesElement.childNodes[7].style.opacity = 1}
  if (difficulty === 'very hard') {choosenDifficulty = difficulties[4];difficultiesElement.childNodes[9].style.opacity = 1}
  if (difficulty === 'deadly') {choosenDifficulty = difficulties[5];difficultiesElement.childNodes[11].style.opacity = 1}
  if (difficulty === 'impossible') {choosenDifficulty = difficulties[6];difficultiesElement.childNodes[13].style.opacity = 1}

  clearInterval(interval)
  currentPositionX = 50
  currentPositionY = 50

  dot.animate({
    left: `${currentPositionX}%`,
    top: `${currentPositionY}%`
  }, {duration: choosenDifficulty * 10, fill:"forwards"})
}