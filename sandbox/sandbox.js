let body = document.getElementById('app')
let tile;
let player;

// State objects
let gS /*gameState*/= {
    currentTurn: 1,
    
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

let whoTurn = document.createElement('h4');
whoTurn.textContent = `It's `

for (i=0; i < 9; i++) {
    let square = document.createElement('div');
    square.classList = 'col-4 h-25 text-center border border-success border-3 tile';
    square.id = i;
    row.appendChild(square);
    let btn = document.createElement('button');
    btn.classList = 'button h-100 w-100';
    btn.id = i;
    btn.disabled = false
    square.appendChild(btn);
}
let container = document.createElement('div');
container.classList = 'container';
body.appendChild(container);

let row = document.createElement('div');
row.classList = 'row vh-100 align-content-center';
row.id = 'row'
container.appendChild(row);

let resetBtn = document.createElement('button')
resetBtn.classList = 'button text-center'
resetBtn.textContent = 'RESET GAME'
body.appendChild(resetBtn);

const buttons = document.getElementsByClassName('button')

body.addEventListener('click', e => {
    if (e.target.matches('button')) {
        updateTile(e.target.id)
        buttons[e.target.id].disabled = true
    }
    // body.removeEventListener('click', e => {
    //     console.log("removed");
    // })
})

body.removeEventListener('click', e => {
    if(e.target.matches('button')) {

    }
})

let winConditions = [];

function init() {
    
};

function updateTile(tile) {
    /*if(gS.currentTurn === 0) {
        console.log("Start the game!");
    } else*/ if(gS.currentTurn % 2 === 1) {
        gS.bS[tile] = gS.player[1];
        buttons[tile].textContent = gS.bS[tile];
    } else {
        gS.bS[tile] = gS.player[2];
        buttons[tile].textContent = gS.bS[tile];
    }
    checkWin();
    gS.currentTurn++;
};



function checkWin() {
    winConditions = [
        `${gS.bS[0]}${gS.bS[1]}${gS.bS[2]}`,
        `${gS.bS[3]}${gS.bS[4]}${gS.bS[5]}`,
        `${gS.bS[6]}${gS.bS[7]}${gS.bS[8]}`,
        `${gS.bS[0]}${gS.bS[3]}${gS.bS[6]}`,
        `${gS.bS[1]}${gS.bS[4]}${gS.bS[7]}`,
        `${gS.bS[2]}${gS.bS[5]}${gS.bS[8]}`,
        `${gS.bS[0]}${gS.bS[4]}${gS.bS[8]}`,
        `${gS.bS[2]}${gS.bS[4]}${gS.bS[6]}`
    ];
    if (winConditions.includes('XXX') || winConditions.includes('OOO')) {
        gameEnd();
    }
};

function gameEnd() {
    console.log("GAME OVER");
};

function clearBoard() {
    gS.bS = ["", "", "", "", "", "", "", "", "",];
    gS.currentTurn = 1;
    for (let i = 0; i < 9; i++) {
        buttons[i].textContent = ''
        buttons[i].disabled = false
    }
};

function changeTurn() {
    console.log("NEXT TURN");
};

