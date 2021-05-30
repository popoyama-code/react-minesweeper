const GameHelper = {
  getBoard : (boardSize) => {
    return Array.from(new Array(boardSize), () => new Array(boardSize).fill(0))
  }
}

export default GameHelper