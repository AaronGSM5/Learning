let field = [
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0]
    ]
    
    let player = 1
    let row = 5
    let columnValue = 1
    let checkIfMoveWasMade = false
    let gameOver = true
    let color;
    let borderColor;
    let enableMove = true
    
    const chipProperties = {
        red: "background-color:red; border:15px solid rgb(138, 1, 1)",
        yellow: "background-color:yellow; border:15px solid rgb(138, 138, 1)"
    }
    const winScreen = document.querySelector('#win-screen')