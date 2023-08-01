import React, { useState } from 'react';
import './FileInput.css'; // Import the CSS file

const FileInput = () => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [translatedFile, setTranslatedFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isDragging, setIsDragging] = useState(false); // State to track dragging

  // Function to handle file selection and API call to the Lambda function
  // ... (rest of the code)

  // Event handlers for drag and drop
  const handleDragStart = (e) => {
    e.dataTransfer.setData('text/plain', ''); // Set data to transfer (empty in this case)
    setIsDragging(true);
  };

  const handleDragOver = (e) => {
    e.preventDefault(); // Allow drop
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    handleFileSelect(file);
  };

  // Function to handle file selection and API call to the Lambda function
  const handleFileSelect = async (file) => {
    setIsLoading(true);

    // Simulate image processing delay
    setTimeout(() => {
      setUploadedFile(file);
      setTranslatedFile(file); // Reset translatedFile when new file is selected
      setIsLoading(false);
    }, 4000); // Replace 3000 with the actual delay in milliseconds

    // Perform API call to your AWS Lambda function here and set the translatedFile state with the result
    // Replace the fake API call with your actual API call to the Lambda function
/*     try {
      // Simulate API call delay (replace with actual API call)
      await new Promise((resolve) => setTimeout(resolve, 3000));

      // Example of a fake translated file URL
      const fakeTranslatedFileUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH0buAM-qQKTibKB8MpUsw51lCyaWYh8dZqWtjU-tZ&s'; // Replace with actual URL
      setTranslatedFile(fakeTranslatedFileUrl);
    } catch (error) {
      console.error('Error occurred during API call:', error);
    } finally {
      setIsLoading(false);
    } */
  };

  const clearImages = async () =>{
    setUploadedFile(null) 
    setTranslatedFile(null)
  }


  return (
    <div className="file-input-container">
      
      {uploadedFile ? (
        <>
      <div className="image-container">
        {uploadedFile && (
          <>
            {uploadedFile.type.startsWith('image/') ? (
              <img src={URL.createObjectURL(uploadedFile)} alt="Uploaded File" />
            ) : uploadedFile.type.startsWith('video/') ? (
              <video controls>
                <source src={URL.createObjectURL(uploadedFile)} type={uploadedFile.type} />
              </video>
            ) : null}
          </>
        )}
        
        {translatedFile && (
          <>
            {translatedFile.type.startsWith('image/') ? (
              <img src={URL.createObjectURL(translatedFile)} alt="Translated File" />
            ) : translatedFile.type.startsWith('video/') ? (
              <video controls>
                <source src={URL.createObjectURL(translatedFile)} type={translatedFile.type} />
              </video>
            ) : null}
          </>
        )}
      </div>
      <button className="clear-button" onClick={clearImages}>Clear</button></>):(
        <>  {isLoading && <div className="loading-indicator">Loading...</div>}    
            <div className="file-input-container">
      {/* Styled button */}
      <label htmlFor="file-input" className="file-input-label">
        Upload File
      </label>
      {/* Input file field */}
      <input
        id="file-input"
        type="file"
        accept="image/*, video/*"
        onChange={(e) => handleFileSelect(e.target.files[0])}
      />

      {/* Rest of the code */}
      {/* ... */}
    </div>
        <div
        className={`drag-drop-container ${isDragging ? 'drag-over' : ''}`}
        onDragOver={handleDragOver}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="drag-drop-message">Drag and drop an image or video here</div>
      </div>
        </>

      )}
      
    </div>
  );
};

export default FileInput;
