const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target.result;
        document.getElementById("sudokuInput").value = content;
      };
      reader.readAsText(file);
    }
  };

  export default handleFileUpload;