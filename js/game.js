'use strict';

const MINE = '*';
const EMPTY = '';
const FLAGE = 'F';

var gBoard;
var gLevel1 = {
    size: 4,
    mines: 2
};
var gLevel2 = {
    size: 8,
    mines: 12
};
var gLevel3 = {
    size: 12,
    mines: 12
};
var gGame = {
    isOn: false,
    shownCount: 0,
    markedCount: 0,
    secsPassed: 0
};

var gIntervalShow;

function inIt() {
    gBoard = buildBoard();
    renderBoard(gBoard, '.board-container');
    getMines(gBoard);
    gGame.isOn = true;
    setMinesNegsCount(gBoard);

}
console.table(buildBoard());
function buildBoard() {
    // TODO: bild a board to the model
    var board = createMat(gLevel1.size, gLevel1.size);
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[0].length; j++) {
            board[i][j] = {
                minesAroundCount: 0,
                isShown: false,
                isMine: false,
                isMarked: false,
            }
        }
    }
    return board;
}

function renderBoard(board, selector) {
    var strHTML = '<table border="0"><tbody>';
    for (var i = 0; i < board.length; i++) {
        strHTML += '<tr>';
        for (var j = 0; j < board[0].length; j++) {
            var cell = board[i][j];
            var className = 'cell-' + i + '-' + j;
            strHTML += `<td data-i="${i}" data-j="${j}" onclick="cellClicked(${i},${j},this)" class="${className}">${board[i][j]}</td>`;

        }
        strHTML += '</tr>';
    }
    strHTML += '</tbody></table>';
    var elContainer = document.querySelector(selector);
    elContainer.innerHTML = strHTML;
}


function cellClicked(i, j, elCell) {
    if (gBoard[i][j].isMarked === true || gBoard[i][j].isShown === true) return;
    else gBoard[i][j].isShown = true;
    elCell.classList.add('clicked');
    expandShown(gBoard);

}

// function cellMarked(elCell) {
//     //TODO: Model: onright click mark a flag.
//     if (gBoard[i][j].isMarked === true || gBoard[i][j].isShown === true) return;
//     else  if toggle.gBoard[i][j].isMarke ;
//     var cell= { i, j };
//     console.log(elCell.classList);
//     elCell.innerHTML=FLAGE;


//     //TODO: render to the dom.

// }
function expandShown(board) {
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[0].length; j++) {
            for (var x = i - 1; x <= i + 1; x++) {
                if (x < 0 || x > board.length - 1) continue;
                for (var y = j - 1; y <= j + 1; y++) {
                    if (y < 0 || y > board[0].length - 1) continue;
                    if (x === i && y === j) continue;
                    if (board[x][y].isMine===true) continue;
                     else{ 
                         board[x][y].isho=true;
                      var elCell= {x,y};
                      elCell = document.querySelector(`[data-i="${x}"][data-j="${y}"]`);
            elCell.classList.add('clicked');
          
                     }
                    
        }
    }
}

            }
    }







function checkGameOver() {
    //TODO: Game ends when all mines are marked, and all the other cells are shown.

    // TODO: msg: win or lose. 

}


