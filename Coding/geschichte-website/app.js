const slides = document.querySelector('#slides-container')
const blur = document.querySelector('.blur')
let activeIndex = 0
let enableButtons = true

function changeSlides(nextIndex) {
  if (enableButtons && activeIndex != nextIndex) {
    enableButtons = false
    const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`)
    const nextSlide = document.querySelector(`[data-index="${nextIndex}"]`)
  
    currentSlide.dataset.status = "before";
    nextSlide.dataset.status = "active";
    
    blur.style = `backdrop-filter: blur(2000px);`

    activeIndex = nextIndex

    colorLinks(nextIndex)
    setTimeout(() => {
      changeBackground(nextIndex)
        enableButtons = true
        blur.style = `backdrop-filter: blur(5px);`
        currentSlide.dataset.status = "unknown";
    }, 500);
  }
}

function changeBackground(index) {
  const background = document.querySelector('#main-img')
  let image;

  //Chose Correct Image
  if (index === 0) {
    // Start
    image = `https://meinwarschau.com/wp-content/uploads/2020/05/verfassung-polen-1791.jpg`
  }
  else if (index === 1) {
    // Historischer Hintergrund
    image = `https://wikiwandv2-19431.kxcdn.com/_next/image?url=https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Wojniakowski_Passing_of_the_3rd_of_May_Constitution.jpg/640px-Wojniakowski_Passing_of_the_3rd_of_May_Constitution.jpg&w=640&q=50`
  }
  else if (index === 2) {
    // Aspekte der Verfassung
    image = `https://static.prsa.pl/images/737c529e-b400-4e75-ab46-5bbc5c418d76.jpg`
  }
  else if (index === 3) {
    // Reaktion der Menschen
    image = `https://www.delcampe.net/static/img_large/auction/001/738/258/744_001.jpg`
  }
  else if (index === 4) {
    // Relevanz bis heute
    image = `https://bilder.deutschlandfunk.de/FI/LE/_3/2e/FILE_32eb008c8a90353c35517acdff1efd84/evening-session-of-p-47743621-jpg-100-original.jpg`
  }
  else if (index === 5) {
    // So wird gefeiert
    image = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH0r7zJeP-Gktx268DZATsxxa7Eg6kKlWS5Kt2yo9sLQ&s`
  }
  // Set Image as background
  background.src = image
}

function colorLinks(index) {
  //Set all links to default
   for (let i = 0; i <= 5; i++) {
    document.querySelector(`.link[data-id="${i}"]`).style = 'color:rgb(98, 86, 124);'
   }
   // Set selected link white
   document.querySelector(`.link[data-id="${index}"]`).style = 'color:rgb(255,255,255);'
}

function lightTitle(title) {
  setTimeout(() => {
    document.querySelector(`#${title}`).style = 'text-shadow: 0 0 10px white; transform:scale(1.02)'
    document.querySelector(`#${title}-text`).style = 'color:white; transform:scale(1.02)'
  }, 500);
  setTimeout(() => {
    document.querySelector(`#${title}`).style = ''
    document.querySelector(`#${title}-text`).style = ''
  }, 1400);
}