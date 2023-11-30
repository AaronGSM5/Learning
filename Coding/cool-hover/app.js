let activeIndex = 0;
let enableButtons = true;

const slides = document.getElementsByClassName("slides");

function like() {
  if (enableButtons) {
    const nextIndex = activeIndex + 1 <= slides.length -1 ? activeIndex + 1 : 0;

    const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`)
    const nextSlide = document.querySelector(`[data-index="${nextIndex}"]`)
  
    currentSlide.dataset.status = "after";
    nextSlide.dataset.status = "active";
    
    setTimeout(() => {
      currentSlide.dataset.status = "unknown";
    }, 500);

    enableButtons = false;
    setTimeout(() => {
      enableButtons = true;
    }, 800);
  
    activeIndex = nextIndex;
  }
}

function dislike() {
  if (enableButtons) {
    const nextIndex = activeIndex + 1 <= slides.length -1 ? activeIndex + 1 : 0;
  
    const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`)
    const nextSlide = document.querySelector(`[data-index="${nextIndex}"]`)
  
    currentSlide.dataset.status = "before";
    nextSlide.dataset.status = "active";
  
    setTimeout(() => {
      currentSlide.dataset.status = "unknown";
    }, 500);
  
    enableButtons = false;
    setTimeout(() => {
      enableButtons = true;
    }, 800);
  
    activeIndex = nextIndex;
  }
}