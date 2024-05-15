import React, { useState } from 'react';
import './slider.scss';

const Slider = ({ images }) => {
  const [imageIndex, setImageIndex] = useState(null);
  console.log(imageIndex)
  const changeSlide = (direction) => {
    if (direction === 'left') {
      setImageIndex((index) => (index === 0 ? images.length - 1 : index - 1));
    } else {
      setImageIndex((index) => (index + 1) % images.length);
    }
  };

  return (
    <div className='slider'>
      {imageIndex != null && (
        <div className='fullSlider'>
          <div className='arrow' onClick={() => changeSlide('left')}>
            <img src='/arrow.png' alt='' />
          </div>
          <div className='imgContainer'>
            <img src={images[imageIndex]} alt='' />
          </div>
          <div className='arrow' onClick={() => changeSlide('right')}>
            <img src='/arrow.png' className='right' alt='' />
          </div>
          <div className='close' onClick={() => setImageIndex(null)}>
            X
          </div>
        </div>
      )}
      <div className='bigImage'>
        <img src={images[0]} alt='' onClick={() => setImageIndex(0)} />
      </div>
      <div className='smallImages'>
        {images.slice(1).map((image, index) => (
          <img src={image} alt='' key={index} onClick={() => setImageIndex(index + 1)} />
        ))}
      </div>
    </div>
  );
};

export default Slider;
