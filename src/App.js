import React, { useState } from "react";
import "./index.css";
import Validator from "./Validator";
import handleFileUpload from "./FileReader";

function App() {
  const [result, setResult] = useState("");
  const [resultColor, setResultColor] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const sudokuInput = document.getElementById("sudokuInput").value;
    try {
      const board = JSON.parse(sudokuInput);
      const isValid = Validator(board);
      setResult(isValid ? "Valid Sudoku Board" : "Invalid Sudoku Board");
      setResultColor(isValid ? "bg-green-500 text-white" : "bg-red-500 text-white");
      //reset the sudukoInput value
      document.getElementById("sudokuInput").value = "";
    } catch (error) {
      setResult("Invalid input format. Please enter a valid JSON array.");
      setResultColor("bg-red-500 text-white");
    }
  };

  const toggleModal = () => {
    setShowModal(!showModal);
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
              onChange={(e) => handleFileUpload(e, setResult, setResultColor)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mt-4"
            />
          </form>
          <button
            onClick={toggleModal}
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded w-full mt-4"
          >
            Help
          </button>
          <div id="result" className={`mt-4 text-lg font-medium w-full p-2 rounded ${resultColor}`}>{result}</div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-2 rounded-lg shadow-md w-full max-w-lg overflow-auto max-h-full">
            <h2 className="text-2xl font-bold mb-4">How to Use</h2>
            <p>
              <strong>Option 1: </strong>
              Enter the Sudoku board as a JSON array in the text area provided. Click the "Validate" button to check if the board is valid.
              <br />
              <strong>Option 2: </strong>
              Upload a JSON file containing the Sudoku board by clicking the "Choose File" button. Then click the "Validate" button to check if the board is valid.
            </p>
            <button
              onClick={toggleModal}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mt-4"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
