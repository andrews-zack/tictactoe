// State objects
let gameState = {
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

    playerTurn: {
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

function updateTile() {
    
}