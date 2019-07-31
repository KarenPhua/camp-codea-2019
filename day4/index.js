var currentText = 'O';
let active = true;

function cellClick(args) {
    if (!active)
        return;

    const cell = args.target;
    
    let existingText = getCellValueByCell(cell)
    if(existingText == 'X' || existingText == 'O')
        return //This cell is already clicked and nothing should change
    if (currentText == 'X')
        setCellByCell(cell, 'O');
    else
        setCellByCell(cell, 'X');

    currentText = getCellValueByCell(cell);

    let winner = checkWinner();
    if (winner != EMPTY_CELL) {
        setStatus(winner + " won!");
        active = false;
    }

    //Check if the game is over
    if(!hasEmptyCell()){
        setStatus("It's a tie");
        active = false;
    }
}

function resetGame() {
    setBoard(EMPTY_CELL);

    setStatus("Ready!");
    active= true;
}
