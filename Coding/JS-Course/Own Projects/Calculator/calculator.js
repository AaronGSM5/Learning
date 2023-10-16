let calculation = localStorage.getItem('calculation') || 0

document.querySelector('.result')
  .innerHTML = calculation

function updateCalculation(add) {
if (calculation === 0) {
  calculation = add
  cText(calculation);
  localStorage.setItem('calculation', calculation)
}
else {
  calculation += add;
  cText(calculation);
  localStorage.setItem('calculation', calculation)
}
}

function cText(value) {
  document.querySelector('.result')
  .innerHTML = value
}