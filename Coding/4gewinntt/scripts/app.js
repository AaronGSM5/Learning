function computerMove() {
    const randomNumber = Math.floor(Math.random() * 7)
    makeMove(randomNumber)
}

function makeMove(column) {
    if (enableMove && gameOver) {
        // make a Move
        chooseMove(column)
        if (checkIfMoveWasMade) {
            // Save column value to check wins
            columnValue = column
            //check for a win
            checkForWin();
            //switch players
            switchPlayers();
            //Reset row value
            row = 5
            //Reset Boolean
            checkIfMoveWasMade = false
        }
    }
}

function chooseMove(column) {
    for(let i = 0; i <= 6; i++) {
        if (field[row][column] === 0) {
            field[row][column] = player
            checkIfMoveWasMade = true
            //Place Chip
            let properties;
            if (player === 1) {properties = chipProperties.red}
            if (player === 2) {properties = chipProperties.yellow}
            document.getElementById(`cell-${row}-${column}`).innerHTML =
            `<div class="chip" style="${properties}"></div>`
            break;
        }
        else if (row === 0) {
            row = 5
            break;
        }
        else {
            row -= 1
        }
    }
}

function switchPlayers() {
    if (player === 2) {player = 1}
    else              {player = 2}
}

function win(r1,c1,r2,c2,r3,c3,r4,c4) {
    gameOver = false
    const winElement = document.querySelector('#win')
    if (player === 1) {
        winElement.innerHTML = `RED <br> WINS!`
    }
    if (player === 2) {
        winElement.innerHTML = `YELLOW <br> WINS!`
    }
    lightCells(r1,c1,r2,c2,r3,c3,r4,c4)
    setTimeout(() => {
        winScreen.style = 'transform: scale(1)'
    }, 4000);
}

function lightCells(r1,c1,r2,c2,r3,c3,r4,c4) {
    console.log(r1,c1,r2,c2,r3,c3,r4,c4)
    setTimeout(() => {
        const backgroundPropWin = `background: radial-gradient(circle, rgba(255,255,255,0) 50%, rgba(8,214,198,1) 51%, rgba(57,0,212,1) 64%, rgba(57,0,212,1) 100%);`
        document.querySelector(`#cell-${r1}-${c1}`).style = backgroundPropWin
        document.querySelector(`#cell-${r2}-${c2}`).style = backgroundPropWin
        document.querySelector(`#cell-${r3}-${c3}`).style = backgroundPropWin
        document.querySelector(`#cell-${r4}-${c4}`).style = backgroundPropWin       
    }, 1500);
    setTimeout(() => {
        document.querySelector(`#cell-${r1}-${c1}`).style = ""
        document.querySelector(`#cell-${r2}-${c2}`).style = ""
        document.querySelector(`#cell-${r3}-${c3}`).style = ""
        document.querySelector(`#cell-${r4}-${c4}`).style = ""
    }, 4000);
}

function resetHTML() {
    for (let valueRow = 0; valueRow <= 5; valueRow++) {
        for (let valueColumn = 0; valueColumn <= 6; valueColumn++) {
            document.getElementById(`cell-${valueRow}-${valueColumn}`).innerHTML = ''
        }
    }
}

function resetGame () {
    enableMove = false
    field = [
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0]
    ]
    player = 1
    row = 5
    gameOver = true
    resetHTML();
    enableMove = true
    winScreen.style = 'transform: scale(0)'
}