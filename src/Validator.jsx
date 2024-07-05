// Validator function to validate if a given Sudoku board is valid
const Validator = (board) => {
  // Helper function to check the validity of the Sudoku board
  const isValidSudoku = (board) => {
    // Create arrays to store sets for rows, columns, and 3x3 boxes
    const rows = new Array(9).fill(0).map(() => new Set());
    const columns = new Array(9).fill(0).map(() => new Set());
    const boxes = new Array(9).fill(0).map(() => new Set());

    // Iterate through each cell in the board
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        const value = board[i][j]; // Get the value at the current cell

        // If the cell is empty (represented by "."), skip it
        if (value === ".") continue;

        // Calculate the index of the 3x3 box
        const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

        // Check if the value is already present in the current row, column, or 3x3 box
        if (rows[i].has(value) || columns[j].has(value) || boxes[boxIndex].has(value)) {
          return false; // If it is, the Sudoku board is invalid
        }

        // Add the value to the sets for the current row, column, and 3x3 box
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
