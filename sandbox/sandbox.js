let tile;
let player;

// State objects
let gameState = {
    currentTurn: 0,
    
    boardState: [
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

let winConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

function init() {
    
};

function updateTile(tile) {
    if(gameState.currentTurn === 0) {
        console.log("Start the game!");
    } else if(gameState.currentTurn % 2 === 1) {
        gameState.boardState[tile] = gameState.player[1];
    } else {
        gameState.boardState[tile] = gameState.player[2];
    }
    gameState.currentTurn++;
};

function gameEnd() {

};

function clearBoard() {
    gameState.boardState = ["", "", "", "", "", "", "", "", "",];
    gameState.currentTurn = 1;
    gameState.player = 1;
}

function changeTurn() {

}

