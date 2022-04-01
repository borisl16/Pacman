const board = ['pink', 'orange', 'purple', 'red', 'green', 'blue'];
const myBoard = [];
const ghosts = [];
const game = {
    x:'', y:'', h:100, size:25, ghosts:6, inplay:false
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
    console.log(game)

})





