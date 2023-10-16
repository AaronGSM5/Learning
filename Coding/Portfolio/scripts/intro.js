
let intro = document.querySelector('.intro')

let page = document.querySelector('.page')
let title = document.querySelector('.header-title')

let navLinks = document.querySelector('.nav-links-container')
let about = document.querySelector('.about')
let work = document.querySelector('.work')
let contact = document.querySelector('.contact')


let rBorder = document.querySelector('.right-right-border')
let bBorder = document.querySelector('.right-bottom-border')
let lBorder = document.querySelector('.left-left-border')
let tBorder = document.querySelector('.left-top-border')

window.addEventListener('DOMContentLoaded', () =>{

  setTimeout(() => {

    rBorder.style.height = '300px'
    rBorder.style.right = '-30px'
    rBorder.style.bottom = '-30px'

    bBorder.style.width = '300px'
    bBorder.style.right = '-30px'
    bBorder.style.bottom = '-30px'

    lBorder.style.height = '300px'
    lBorder.style.top = '-30px'
    lBorder.style.left = '-30px'

    tBorder.style.width = '300px'
    tBorder.style.top = '-30px'
    tBorder.style.left = '-30px'

    intro.style.opacity = 0

  }, 1000);

setTimeout(() => {
  page.style.opacity = '1'
}, 2000);


setTimeout(() => {
  title.style.left = '0'
  navLinks.style.margin = '0'

  setTimeout(() => {
    title.style.opacity = '1'
    navLinks.style.opacity = '1'

    setTimeout(() => {
      about.style.opacity = '1'
      work.style.opacity = '1'
      contact.style.opacity = '1'
    }, 500);

  }, 500);
}, 2200)})