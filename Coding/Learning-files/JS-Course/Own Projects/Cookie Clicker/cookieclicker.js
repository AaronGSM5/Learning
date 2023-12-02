document.querySelector('.cookie')
  .addEventListener('click', () => cookieInc());

document.querySelector('.incClick')
.addEventListener('click', () => incClick());

document.querySelector('.incCookiesPerSecond')
.addEventListener('click', () => incCookiesPerSecond());


const Game = {
  cookies: 0,
  click : 1,
  cookiesPerSecond : 0
}

setInterval(() => {
  Game.cookies += Game.cookiesPerSecond
  updateCookies();
},1000);


function cookieInc () {
  Game.cookies += Game.click
  updateCookies();
}

function updateCookies () {
  document.querySelector('.cookiecount').innerHTML = `${Game.cookies} Cookies`
}

let perSecond = 20
function incCookiesPerSecond () {
  if (Game.cookies >= perSecond) {
    Game.cookies -= perSecond
    Game.cookiesPerSecond++
    perSecond = Math.round(perSecond * 1.5)
    updateCookies();
    document.querySelector('.incCookiesPerSecond')
      .innerText = `Cookies per Second : ${perSecond}`
  }
  else {
    alert('Not enough Cookies yet.')
  }
}

let costClick = 10
function incClick() {
  if (Game.cookies >= costClick) {
    Game.cookies -= costClick
    Game.click++
    costClick = Math.round(costClick * 1.5)
    updateCookies();
    document.querySelector('.incClick')
      .innerText = `Click Rate : ${costClick}`
  }
}


