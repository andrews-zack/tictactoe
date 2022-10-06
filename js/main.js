let body = document.getElementById('app')
let winConditions = [];

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
        // 0: init,
        1: "X",
        2: "O",
        // 3: gameEnd,
    },
}




let container3 = document.createElement('div');
container3.classList = 'container mt-5';
body.appendChild(container3);

let whoTurn = document.createElement('h3');
whoTurn.textContent = `It's ${gS.player[1]}'s turn`;
whoTurn.classList = 'text-center'
container3.appendChild(whoTurn)


let container2 = document.createElement('div');
container2.classList = 'container';
body.appendChild(container2);

let resetBtn = document.createElement('p')
resetBtn.classList = 'bg-dark text-light text-center w-25'
resetBtn.textContent = 'RESET GAME'
resetBtn.id = 'newGame'
container2.appendChild(resetBtn);
resetBtn.addEventListener('click', clearBoard)


let container = document.createElement('div');
container.classList = 'container';
body.appendChild(container);

let row = document.createElement('div');
row.classList = 'row vh-100 align-content-center px-5 mx-5';
row.id = 'row'
container.appendChild(row);

for (i=0; i < 9; i++) {
    let square = document.createElement('div');
    square.classList = 'col-4 h-25 text-center border border-success border-3 tile';
    square.id = i;
    row.appendChild(square);
    let btn = document.createElement('button');
    btn.classList = 'button h-100 w-100 border-0';
    btn.id = i;
    btn.disabled = false
    square.appendChild(btn);
}


const buttons = document.getElementsByClassName('button')

body.addEventListener('click', e => {
    if (e.target.matches('button')) {
        updateTile(e.target.id)
        buttons[e.target.id].disabled = true
    }
})



// function init() {
    
// };

function updateTile(tile) {
    if(gS.currentTurn % 2 === 1) {
        gS.bS[tile] = gS.player[1];
        buttons[tile].textContent = gS.bS[tile];
        whoTurn.textContent = `It's ${gS.player[2]}'s turn`
    } else {
        gS.bS[tile] = gS.player[2];
        buttons[tile].textContent = gS.bS[tile];
        whoTurn.textContent = `It's ${gS.player[1]}'s turn`
    }
    gS.currentTurn++;
    checkWin();
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
    } else if (gS.currentTurn === 10) {
        gameEnd();
    }
};

function gameEnd() {
    if(gS.currentTurn === 10){
        whoTurn.textContent = "IT'S A TIE"
    } else if (gS.currentTurn % 2 === 1) {
    whoTurn.textContent = `${gS.player[2]} WINS`
    } else {
        whoTurn.textContent = `${gS.player[1]} WINS`
    }
    for (let i = 0; i < 9; i++) {
        buttons[i].disabled = true;
    }
};

function clearBoard() {
    gS.bS = ["", "", "", "", "", "", "", "", "",];
    gS.currentTurn = 1;
    for (let i = 0; i < 9; i++) {
        buttons[i].textContent = ''
        buttons[i].disabled = false
    }
    whoTurn.textContent = `It's ${gS.player[1]}'s turn`
};