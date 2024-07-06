function checkForWin () {
    try {
        // HORIZONTAL WINS
            //WIN TO LEFT
                if (field[row][columnValue-1] === player) {
                    if (field[row][columnValue-2] === player) {
                        if (field[row][columnValue-3] === player) {
                            win(row,columnValue,row,columnValue-1,row,columnValue-2,row,columnValue-3,)
                        }
                    }
                }
            //WIN TO LEFT
            //WIN TO RIGHT
                if (field[row][columnValue+1] === player) {
                    if (field[row][columnValue+2] === player) {
                        if (field[row][columnValue+3] === player) {
                            win(row,columnValue,row,columnValue+1,row,columnValue+2, row,columnValue+3)
                        }
                    }
                }
            //WIN TO RIGHT
            //WIN 1 LEFT 2 RIGHT
            if (field[row][columnValue-1] === player) {
                if (field[row][columnValue+1] === player) {
                    if (field[row][columnValue+2] === player) {
                            win(row,columnValue,row,columnValue-1,row,columnValue+1,row,columnValue+2)
                    }
                }
            }
            //WIN 1 LEFT 2 RIGHT
            //WIN 2 LEFT 1 RIGHT
                if (field[row][columnValue+1] === player) {
                    if (field[row][columnValue-1] === player) {
                        if (field[row][columnValue-2] === player) {
                                win(row, columnValue, row, columnValue+1, row, columnValue-1, row, columnValue-2)
                        }
                    }
                }
            //WIN 2 LEFT 1 RIGHT
        // HORIZONTAL WINS
        // VERTICAL WINS
            if (field[row+1][columnValue] === player) {
                if (field[row+2][columnValue] === player) {
                    if (field[row+3][columnValue] === player) {
                            win(row,columnValue,row+1,columnValue,row+2,columnValue,row+3,columnValue)
                    }
                }
            }
        // VERTICAL WINS
    
        // DIAGONAL WINS
            // DIAGONAL WINS RIGHT
                //WIN RIGHT
                    if (field[row-1][columnValue+1] === player) {
                        if (field[row-2][columnValue+2] === player) {
                            if (field[row-3][columnValue+3] === player) {
                                    win(row,columnValue,row-1,columnValue+1,row-2,columnValue+2, row-3,columnValue+3)
                            }
                        }
                    }
                //WIN RIGHT
                //WIN 2 RIGHT 1 LEFT
                    if (field[row+1][columnValue-1] === player) {
                        if (field[row-1][columnValue+1] === player) {
                            if (field[row-2][columnValue+2] === player) {
                                    win()
                            }
                        }
                    }
                //WIN 2 RIGHT 1 LEFT
                //WIN 1 RIGHT 2 LEFT
                    if (field[row-1][columnValue+1] === player) {
                        if (field[row+1][columnValue-1] === player) {
                            if (field[row+2][columnValue-2] === player) {
                                    win()
                            }
                        }
                    }
                //WIN 1 RIGHT 2 LEFT
                // WIN LEFT
                    if (field[row+1][columnValue-1] === player) {
                        if (field[row+2][columnValue-2] === player) {
                            if (field[row+3][columnValue-3] === player) {
                                    win()
                            }
                        }
                    }
                // WIN LEFT
            // DIAGONAL WINS RIGHT
            // DIAGONAL WINS LEFT
                // WIN LEFT
                    if (field[row-1][columnValue-1] === player) {
                        if (field[row-2][columnValue-2] === player) {
                            if (field[row-3][columnValue-3] === player) {
                                    win()
                            }
                        }
                    }
                // WIN LEFT
                // WIN 2 LEFT 1 RIGHT
                    if (field[row-1][columnValue-1] === player) {
                        if (field[row-2][columnValue-2] === player) {
                            if (field[row+1][columnValue+2] === player) {
                                    win()
                            }
                        }
                    }
                // WIN 2 LEFT 1 RIGHT
                // WIN 1 LEFT 2 RIGHT
                    if (field[row-1][columnValue-1] === player) {
                        if (field[row+1][columnValue+1] === player) {
                            if (field[row+2][columnValue+2] === player) {
                                    win()
                            }
                        }
                    }
                // WIN 1 LEFT 2 RIGHT
                // WIN RIGHT
                    if (field[row+1][columnValue+1] === player) {
                        if (field[row+2][columnValue+2] === player) {
                            if (field[row+3][columnValue+3] === player) {
                                    win()
                            }
                        }
                    }
                // WIN RIGHT
            // DIAGONAL WINS LEFT
        // DIAGONAL WINS
    }
    catch {}
}
