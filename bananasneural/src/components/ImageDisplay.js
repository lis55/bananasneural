// ImageDisplay.js
import React from 'react';

const ImageDisplay = ({ file, translatedFile }) => {
  return (
    <div>
      
      <div>
        {file && file.type.startsWith('image/') && (
          <img src={URL.createObjectURL(file)} alt="Uploaded File" />
        )}
        {file && file.type.startsWith('video/') && (
          <video controls>
            <source src={URL.createObjectURL(file)} type={file.type} />
          </video>
        )}
      </div>
      <div>
        {translatedFile && translatedFile.type.startsWith('image/') && (
          <img src={URL.createObjectURL(translatedFile)} alt="Translated File" />
        )}
        {/* Handle translated video, if needed */}
      </div>
    </div>
    
  );
};

export default ImageDisplay;