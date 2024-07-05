import React, { useState } from "react";
import "./index.css";
import Validator from "./Validator";
import handleFileUpload from "./FileReader";

function App() {
  const [result, setResult] = useState("");
  const [resultColor, setResultColor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const sudokuInput = document.getElementById("sudokuInput").value;
    try {
      const board = JSON.parse(sudokuInput);
      const isValid = Validator(board);
      setResult(isValid ? "Valid Sudoku Board" : "Invalid Sudoku Board");
      setResultColor(isValid ? "bg-green-500 text-white" : "bg-red-500 text-white");
    } catch (error) {
      setResult("Invalid input format. Please enter a valid JSON array.");
      setResultColor("bg-red-500 text-white");
    }
  };

  return (
    <div className="App">
      <div className="bg-gray-100 flex items-center justify-center min-h-screen">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
          <h1 className="text-2xl font-bold mb-4 text-center">Sudoku Validator</h1>
          <form id="sudokuForm" onSubmit={handleSubmit}>
            <textarea
              id="sudokuInput"
              className="w-full p-2 border border-gray-300 rounded mb-4"
              rows="10"
              placeholder="Enter the Sudoku board as JSON array..."
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
            >
              Validate
            </button>
            <input
                type="file"
                accept=".json"
                onChange={handleFileUpload}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mt-4"
              />
          </form>
          <div id="result" className={`mt-4 text-lg font-medium w-full p-2 rounded ${resultColor}`}>{result}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
