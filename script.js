let GRID_SIZE = 30;
let PIECE_COLOR = "red";
let GAME = [];



function createGame(columns, rows) {
    gameLogic(columns * rows);
    findWinningArrays(columns * rows);
  
    const boardStyles = {
      backgroundColor: "rgba(255, 255, 255, 0)",
      border: "solid",
      display: "grid",
      gridTemplateColumns: `repeat(${columns}, ${GRID_SIZE}px)`,
      gridTemplateRows: `repeat(${rows}, ${GRID_SIZE}px)`,
      gap: "2px",
      height: "fit-content",
      width: "fit-content",
      justifyItems: "center",
      alignItems: "center",
      marginTop: "100px",
      //mixBlendMode: 'hard-light'
    };
  
    Object.keys(boardStyles).forEach((key) => {
      board.style[key] = boardStyles[key];
    });
  
    background.appendChild(board);
  
    for (let i = 0; i < columns * rows; i++) {
      const gridBox = document.createElement("div");
      const gridBoxStyles = {
        backgroundColor: "rgba(255, 255, 255, 0)",
        border: "solid",
        borderWidth: "2px",
        overflow: "hidden",
        height: `${GRID_SIZE}px`,
        width: `${GRID_SIZE}px`,
      };
      gridBox.setAttribute("id", "gridBox-" + i);
      Object.keys(gridBoxStyles).forEach((key) => {
        gridBox.style[key] = gridBoxStyles[key];
      });
  
      board.appendChild(gridBox);
  
      const gridBoxHole = document.createElement("div");
      const gridBoxHoleStyles = {
        backgroundColor: "rgba(255, 255, 255, 0)",
        transform: `translate(-${GRID_SIZE / 3}px,-${GRID_SIZE / 3}px)`,
        border: "solid",
        color: "blue",
        borderWidth: `${GRID_SIZE / 2}px`,
        height: `${(GRID_SIZE * 2) / 3}px`,
        width: `${(GRID_SIZE * 2) / 3}px`,
        textAlign: "center",
        borderRadius: "50%",
      };
      Object.keys(gridBoxHoleStyles).forEach((key) => {
        gridBoxHole.style[key] = gridBoxHoleStyles[key];
      });
  
      gridBox.appendChild(gridBoxHole);
  
      addMouseOverListener(gridBox);
    }
  }

function gameLogic(gameSize) {
    let column = 1;
    for (let i = 0; i < gameSize; i++) {
      if (column > 7) {
        column = 1;
      }
      let gridBox = {
        id: i,
        row: Math.floor(i / 7) + 1,
        column: column,
        color: "blank",
      };
      column++;
      GAME.push(gridBox);
    }
  }

  


createGame(7,3);