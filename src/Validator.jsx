const Validator = (board) => {
  const isValidSudoku = (board) => {
    const rows = new Array(9).fill(0).map(() => new Set());
    const columns = new Array(9).fill(0).map(() => new Set());
    const boxes = new Array(9).fill(0).map(() => new Set());

    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        const value = board[i][j];
        if (value === ".") continue;
        const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
        if (rows[i].has(value) || columns[j].has(value) || boxes[boxIndex].has(value)) {
          return false;
        }
        rows[i].add(value);
        columns[j].add(value);
        boxes[boxIndex].add(value);
      }
    }
    return true;
  };

  return isValidSudoku(board);
};

export default Validator;
