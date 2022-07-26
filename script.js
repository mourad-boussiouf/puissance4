function createGame(columns, rows, gridBoxSize) {

const board = document.createElement('div');

const boardStyle = {
    backgroundColor :'blue',
    border:'solid',
    display:'grid',
    gridTemplateColumns:`repeat(${columns}, ${gridBoxSize}px)`,
    gridTemplateRows:`repeat(${rows}, ${gridBoxSize}px)`,
    gap: '2px',
    height:'fit-content',
    width: 'fit-content',
    padding: '3px'

}

Object.keys(boardStyle).forEach((key)=>{
    board.style[key] = boardStyle[key];
})



document.body.appendChild(board);


for(let i = 0; i < columns*rows; i++) {
        const gridBox = document.createElement('div');
        
        const gridBoxStyle = {
            backgroundColor :'white',
            border:'solid',
            height: `${gridBoxSize}px`,
            width: `${gridBoxSize}px`
        
        }
        
        Object.keys(gridBoxStyle).forEach((key)=>{
            gridBox.style[key] = gridBoxStyle[key];
        })

        board.appendChild(gridBox);



        const gridBoxHole = document.createElement('div');
        
        const gridBoxHoleStyle = {
            backgroundColor :'white',
            border:'solid',
            height: `${gridBoxSize -10}px`,
            width: `${gridBoxSize -10}px`,
            borderRadius : '50%',
            margin: `${gridBoxSize / 7}px`
        
        }
        
        Object.keys(gridBoxHoleStyle).forEach((key)=>{
            gridBoxHole.style[key] = gridBoxHoleStyle[key];
        })

        gridBox.appendChild(gridBoxHole);

}

}

createGame(7,3,20)