function changeWork() {
  const content = document.querySelector('.content') 
  content.innerHTML = `
  <section class="work-content">

  <div class="item-container">
    <div class="slide">
      <div class="item">
        <div>
          <h2>Tic Tac Toe</h2>
          <br>
          Ein simples Tic-Tac-Toe Spiel, man kann gegen einen Computer spielen, und den Hintergrund ändern. <br>
          <br>
          Probieren sie es doch gerne aus!
        </div>
        <div class="right-side">
            <img src="img/tictactoe.png" class="tictactoe" alt="Ein Bild mit einem TicTacToe Feld">
        </div>
      </div>
    </div>
    <div class="slide">
      <div class="item">Item 2</div>
    </div>
    <div class="slide">
      <div class="item">Item 3</div>
    </div>
  </div>

  <div class="content-bar">
    <button class="content-sections slider1"></button>
    <button class="content-sections slider2"></button>
    <button class="content-sections slider3"></button>
  </div>
</section>
  `
}





document.querySelector('.about').addEventListener('click', () => 
{
  const content = document.querySelector('.content')

  content.innerHTML = `           
  <section class="about-content">
  <div class="about-container">
    <span>
      <h2 id="hallo">Hallo!</h2>
      <p id="text">
        Mein name ist Aaron, ich bin ein anstrebender Fachinformatiker. Momentan konzentriere ich mich auf das Front-End von Webseiten, dafür nutze ich HTML, CSS, und Javascript. <br>
        <br>
        Schauen sie sich doch gerne Meine bisherigen <button class="projekte">Projekte</button> an.
      </p>
    </span>
  </div>
  </section>`

  const projekte = document.querySelector('.projekte')

  projekte.addEventListener('click', () => {
    changeWork();
  })
})


document.querySelector('.work').addEventListener('click', () => 
{
  changeWork();

  const slider1 = document.querySelector('.slider1')
  const slider2 = document.querySelector('.slider2')
  const slider3 = document.querySelector('.slider3')

  slider1.addEventListener('click', () => {sliderButtons(1)})
  slider2.addEventListener('click', () => {sliderButtons(2)})
  slider3.addEventListener('click', () => {sliderButtons(3)})
})

// FUNCTIONS
// FUNCTIONS

function sliderButtons(num) {
  const slider1 = document.querySelector('.slider1')
  const slider2 = document.querySelector('.slider2')
  const slider3 = document.querySelector('.slider3')

  slider1.style.background = 'white'
  slider2.style.background = 'white'
  slider3.style.background = 'white'
  if(num === 1) {
    slider1.style.background = 'rgb(9, 255, 0)'
    document.querySelector('.item-container').scrollLeft = 0
  }
  else if(num === 2) {
    slider2.style.background = 'rgb(0, 162, 255)'
    document.querySelector('.item-container').scrollLeft = 1000
  }
  else if(num === 3) {
    slider3.style.background = 'rgb(162, 0, 255)'
    document.querySelector('.item-container').scrollLeft = 2000
  }
}