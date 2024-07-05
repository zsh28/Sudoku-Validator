# Sudoku Validator

This project is a web-based application that validates a 9x9 Sudoku board. The application checks whether a given Sudoku board is valid according to the standard Sudoku rules: each row, column, and 3x3 sub-box can only contain the digits 1-9 without repetition. The application does not check if the board is solvable, only if the filled cells do not break the rules.

## Features

- Accepts Sudoku board input as a JSON array through a text area or by uploading a JSON file.
- Validates the Sudoku board and displays the result on the web page.
- Provides user-friendly error messages for invalid input formats.

## Getting Started

### Prerequisites

To run this project, you will need:

- Node.js installed [Download Node.js](https://nodejs.org/en/download/prebuilt-installer/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/zsh28/Sudoku-Validator.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Sudoku-Validator
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

### Running the Application

1. Start the development server:

   ```bash
   npm start
   ```

2. Open your web browser and navigate to:

   ```bash
   http://localhost:3000
   ```

### Usage

1. **Enter Sudoku Board:**

   - Option 1: Manually enter the Sudoku board as a JSON array in the provided text area. Example format:

     a) Invalid JSON
     ```json
     [
       [".",".","9",".",".","7",".","4","."],
       ["9","7","1",".","2",".",".",".","5"],
       [".","4",".",".",".",".",".","3","9"],
       [".",".",".",".",".","8",".",".","."],
       [".",".",".","4","6",".",".",".","."],
       [".",".","2","1","9",".","8",".","."],
       [".","6",".",".",".",".","4",".","."],
       [".","9",".","2","8","6","5",".","."],
       ["5",".",".",".",".",".",".",".","."]
     ]
     ```

     b) Valid JSON
     ```json
     [
       [".","6",".","4",".","3",".","7","."],
       ["7","5","1",".",".",".",".",".","."],
       [".",".",".",".",".","2",".",".","."],
       [".",".",".",".",".","9","8","6","."],
       [".",".",".",".","8","1",".",".","7"],
       ["4",".",".",".","5",".",".",".","."],
       [".","1",".",".",".",".",".","8","."],
       [".","2",".",".",".",".","1",".","."],
       ["6","3",".",".",".",".","5",".","."]
     ]
     ```

   - Option 2: Upload a JSON file containing the Sudoku board by clicking the "Choose File" button.

2. Click the "Validate" button to check if the board is valid. The result will be displayed below the button.

3. For help on how to use the application, click the "Help" button.

### Project Structure

- `App.js`: Main component that renders the form, handles user input, and displays results.
- `FileReader.jsx`: Helper function to handle file upload and read the content.
- `Validator.jsx`: Function to validate the Sudoku board according to the rules.

### Additional Notes

- Ensure that the input is a valid JSON array with 9 sub-arrays, each containing 9 values (either "1"-"9" or ".").
- The application only checks the validity of the filled cells and does not attempt to solve the Sudoku puzzle.