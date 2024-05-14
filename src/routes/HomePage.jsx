import React from 'react';
import './homePage.scss';
import SearchBar from '../components/searchBar/SearchBar';

const HomePage = () => {
  return (
    <div className='homePage'>
      <div className='textContainer'>
        <div className='wrapper'>
          <h1 className='title'>Unlock Your Dream Home - Where Elegance Meets Comfort</h1>
          <p>
            Discover a world where luxury is accessible and dreams take shape. Our curated properties offer the perfect blend of sophistication and serenity, designed to elevate your living experience. Start your journey home with us today!
          </p>
          <SearchBar />
          <div className="boxes">
            <div className='box'>
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className='box'>
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div className='box'>
              <h1>1200+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className='imageContainer'>
        <img src='../../public/bg.png' alt='' />
      </div>
    </div>
  );
};

export default HomePage;
