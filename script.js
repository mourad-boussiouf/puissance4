const board = document.createElement('div');

const boardStyle = {
    backgroundColor :'blue',
    border:'solid',
    display:'grid',
    gridTemplateColumns:`repeat(${columns}, ${gridBoxSize}px)`
}