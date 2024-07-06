let game = {
  cell1: 0,
  cell2: 0,
  cell3: 0,
  cell4: 0,
  cell5: 0,
  cell6: 0,
  cell7: 0,
  cell8: 0,
  cell9: 0,
}

let currentSize;

function allowDrop(event) {
  event.preventDefault();
}

function drag(event, size) {
  event.dataTransfer.setData("text", event.target.id);
  currentSize = size
}

function drop(event, cell) {
  if(game[cell] < Number(currentSize)) {
    event.preventDefault();
    // document.getElementById(cell).innerHTML = ""
    game[cell] = currentSize
    placeThimble(event)
    console.log(game)
  }
}

function placeThimble(event) {
    let data = event.dataTransfer.getData("text")
    event.target.appendChild(document.getElementById(data))
}