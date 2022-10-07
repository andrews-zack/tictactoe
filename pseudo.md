# TIC-TAC-TOE

### About 
- Create a webpage that recreates the childhood classic game using JavaScript, HTML, and the Bootstrap CSS framework
- The game should let the players know who's turn it is.
- Game tiles should only be clickable once, and if the game is over they should not be clickable at all.
- The game should display who wins the game if someone wins, otherwise, say that the game resulted in a tie.
- There should be a Restart Game button that does not refresh the page (set state).
- On each player’s turn, that player places one of their symbols on an unoccupied space by clicking.
- The game continues until one player places three symbols in a straight line (horizontal, vertical, or diagonal) and wins or there are no remaining available spaces and it is a draw.
- Only have a single ```<div id="app"></div>``` in your index.HTML (try to code golf the HTML file)

### Idea
* Use the idea of state to dictate how the game looks and what can happen
    - State 0 is when the game loads but before the player clicks on "Start Game"
    - State 1 is when it is "X's" turn to go
    - State 2 is when it is "O's" turn to go
    - State 3 is when the game is over, whether in a tie or one player wins
* An object of the game state will update with which player selects which tile
* That state will be checked against an object of winning conditions to determine whether the game should be over or continue playing

![pseudocode notes 1](/img/pseudo-notes1)
![pseudocode notes 2](/img/pseudo-notes2)
