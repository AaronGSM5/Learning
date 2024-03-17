const time = document.querySelector('.time')
const date = document.querySelector('.date')
const input = document.getElementById('input')

time.innerText = dayjs().format('HH : mm : ss')
date.innerText = dayjs().format('DD.MM.YYYY')

setInterval(() => {
time.innerText = dayjs().format('HH : mm : ss')
date.innerText = dayjs().format('DD.MM.YYYY')
}, 1000);


