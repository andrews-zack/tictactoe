let body = document.getElementById('app')
let tile;
let player;

// State objects
let gS /*gameState*/= {
    currentTurn: 0,
    
    bS/*boardState*/: [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
    ],

    player: {
        0: init,
        1: "X",
        2: "O",
        3: gameEnd,
    },
}

let container = document.createElement('div');
container.classList = 'container';
body.appendChild(container);

let row = document.createElement('div');
row.classList = 'row vh-100 align-content-center';
row.id = 'row'
container.appendChild(row);

for (i=0; i < 9; i++) {
    let square = document.createElement('div');
    square.classList = 'col-4 h-25 text-center border border-success border-3 tile';
    square.id = i;
    row.appendChild(square);
    // square.textContent = 'Tile ' + i
}

const tiles = document.getElementById('row');

tiles.addEventListener('click', e => {
    if(e.target.className === 'tile') {
        console.log(e.target.id)
    }
})


let winConditions = [];

function init() {
    
};

function updateTile(tile) {
    if(gS.currentTurn === 0) {
        console.log("Start the game!");
    } else if(gS.currentTurn % 2 === 1) {
        gS.bS[tile] = gS.player[1];
    } else {
        gS.bS[tile] = gS.player[2];
    }
    gS.currentTurn++;
};

function updateBoard() {

}

function checkWin() {
    winConditions = [
        `${gS.bS[0]}${gS.bS[1]}${gS.bS[2]}`,
        `${gS.bS[3]}${gS.bS[4]}${gS.bS[5]}`,
        `${gS.bS[6]}${gS.bS[7]}${gS.bS[8]}`,
        `${gS.bS[0]}${gS.bS[3]}${gS.bS[6]}`,
        `${gS.bS[1]}${gS.bS[4]}${gS.bS[7]}`,
        `${gS.bS[2]}${gS.bS[5]}${gS.bS[8]}`,
        `${gS.bS[0]}${gS.bS[4]}${gS.bS[8]}`,
        `${gS.bS[6]}${gS.bS[4]}${gS.bS[6]}`
    ];
    if (!!winConditions.find((a) => a === 'XXX' || 'OOO')) {
        gameEnd();
    } else {
        changeTurn();
    }
};

function gameEnd() {
    console.log("GAME OVER");
};

function clearBoard() {
    gameState.boardState = ["", "", "", "", "", "", "", "", "",];
    gameState.currentTurn = 1;
    gameState.player = 1;
};

function changeTurn() {
    console.log("NEXT TURN");
};

