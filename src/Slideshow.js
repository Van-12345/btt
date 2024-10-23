import React, { useState } from 'react';
import './Slideshow.css';  

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageSize, setImageSize] = useState(300); 
  const totalImages = 10;  
  const baseURL = 'https://picsum.photos/';

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages); 
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalImages - 1 : prevIndex - 1)); 
  };

  const backToStart = () => {
    setCurrentIndex(0); 
  };

  const randomImage = () => {
    const randomIndex = Math.floor(Math.random() * totalImages); 
    setCurrentIndex(randomIndex);
  };

  const toggleImageWidth = () => {
    setImageSize((prevSize) => (prevSize === 300 ? 400 : 300)); 
  };

  return (
    <div>
      <img
        src={`${baseURL}${imageSize}/?image=${currentIndex}`}
        alt={`Slide ${currentIndex}`}
        style={{ width: `${imageSize}px`, height: `${imageSize * (2 / 3)}px` }} 
      />
      <div>
        <p>{`Hình ảnh: ${currentIndex + 1} / ${totalImages}`}</p>
        
        <button onClick={prevImage} className="button-pink">Previous</button>
        <button onClick={nextImage} className="button-pink">Next</button>
        <button onClick={backToStart} className="button-pink">Back to Start</button>
        <button onClick={randomImage} className="button-pink">Random Image</button> {}
        <button onClick={toggleImageWidth} className="button-pink">Toggle Width</button> {}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
        <img
          src={`${baseURL}${imageSize}/?image=${(currentIndex - 1 + totalImages) % totalImages}`}
          alt="Previous Thumbnail"
          style={{ width: '50px', height: '33px', marginRight: '10px', cursor: 'pointer' }}
          onClick={prevImage} 
        />
        <img
          src={`${baseURL}${imageSize}/?image=${(currentIndex + 1) % totalImages}`}
          alt="Next Thumbnail"
          style={{ width: '50px', height: '33px', cursor: 'pointer' }}
          onClick={nextImage} 
        />
      </div>
    </div>
  );
};

export default Slideshow;