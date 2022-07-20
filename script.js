function createGame(columns, rows, gridBoxSize)

const board = document.createElement('div');

const boardStyle = {
    backgroundColor :'blue',
    border:'solid',
    display:'grid',
    gridTemplateColumns:`repeat(${columns}, ${gridBoxSize}px)`,
    gridTemplateRows:`repeat(${rows}, ${gridBoxSize}px)`,
    gap: '2px'

}

Object.keys(boardStyle).forEach(()=>{
    board.style[key] = boardStyle[key];
})
document.body.appendChild(board);