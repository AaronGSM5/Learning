let activeIndex = 0;
let enableButtons = true;

const slides = document.getElementsByClassName("slides");

function like() {
  if (enableButtons) {
    enableButtons = false;

    const nextIndex = activeIndex + 1 <= slides.length -1 ? activeIndex + 1 : 0;

    const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`)
    const nextSlide = document.querySelector(`[data-index="${nextIndex}"]`)
    
    nextSlide.style = ''
    currentSlide.dataset.status = "after";
    nextSlide.dataset.status = "active";
    randomDirection();

    setTimeout(() => {
      currentSlide.dataset.status = "unknown";
      enableButtons = true;
    }, 800);
  
    activeIndex = nextIndex;
  }
}


function dislike() {
  if (enableButtons) {
    enableButtons = false;

    const nextIndex = activeIndex + 1 <= slides.length -1 ? activeIndex + 1 : 0;
  
    const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`)
    const nextSlide = document.querySelector(`[data-index="${nextIndex}"]`)
    
    nextSlide.style = ''
    currentSlide.dataset.status = "before";
    nextSlide.dataset.status = "active";
    randomDirection();

    setTimeout(() => {
      enableButtons = true;
      currentSlide.dataset.status = "unknown";
    }, 800);
  
    activeIndex = nextIndex;
  }
}

function randomDirection() {
  const random = Math.round(45 - (Math.random() * 90))

  try {
    document.querySelector(`[data-status="before"]`).style = `rotate: ${random}deg`
  } 
  catch (error) {
    document.querySelector(`[data-status="after"]`).style = `rotate: ${random}deg`
  }


  // document.querySelector('[data-status="after"]').style.rotate = random;

}