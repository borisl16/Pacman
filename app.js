const board = ['pink', 'orange', 'purple', 'red', 'green', 'blue'];
const myBoard = [];
const tempBoard = [
    1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,
    1,1,1,1,1,1,1,1,1,1,
    ]
const ghosts = [];
const game = {
    x:'', y:'', h:100, size:10, ghosts:6, inplay:false
}
const player = {
    position:20, speed:4, coo:0, pause:false
}

document.addEventListener('DOMContentLoaded', () =>{
    game.grid = document.querySelector('.grid');
    game.pacman = document.querySelector('.pacman');
    game.eye = document.querySelector('.eye');
    game.mouth = document.querySelector('.mouth');  
    game.ghost = document.querySelector('.ghost');
    game.ghost.style.display = 'none';
    createGame();

    console.log(game)

})

function createGame(){
    tempBoard.forEach((cell) =>{
        console.log(cell);
        createSquare(cell);
    })
    for(let i=0; i<game.size; i++ ){
        game.x += ` ${game.h}px `;

    }

    game.grid.style.gridTemplateColumns = game.x;
    game.grid.style.gridTemplateRows = game.x;
}

function createSquare(val) {
    const div = document.createElement('div');
    div.classList.add('box');
    if(val == 1) { div.classList.add('wall');}
    if(val == 2) { 
        const dot = document.createElement('div')
        dot.classList.add('dot');
        div.append(dot);
    }
    if(val == 3) { 
        const dot = document.createElement('div')
        dot.classList.add('superdot');
        div.append(dot);
    } 
    game.grid.append(div);
    tempBoard.push(div);
    
}




