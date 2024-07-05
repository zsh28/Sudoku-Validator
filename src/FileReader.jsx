const handleFileUpload = (event, setResult, setResultColor) => {
  const file = event.target.files[0];
  if (file) {
    if (file.type !== "application/json") {
      //reset the sudukoInput value
      document.getElementById("sudokuInput").value = "";
      setResult("Invalid file type. Please upload a JSON file.");
      setResultColor("bg-red-500 text-white");
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target.result;
      document.getElementById("sudokuInput").value = content;
      setResult("");
      setResultColor("");
    };
    reader.readAsText(file);
  }
};

export default handleFileUpload;
