import { useState } from 'react';
import './searchBar.scss';

const types = ['buy', 'rent'];

const SearchBar = () => {
  const [query, setQuery] = useState({
    type: 'buy',
    location: '',
    minPrice: 0,
    maxPrice: 0,
  });

  const switchType = (type) => {
    setQuery((prev) => ({ ...prev, type: type }));
  };

  return (
    <div className='searchBar'>
      <div className='type'>
        {types.map((type) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={query.type === type ? 'active' : ''}>
            {type}
          </button>
        ))}
      </div>
      <form action=''>
        <input type='text' name='location' placeholder='City' />
        <input
          type='number'
          name='minPrice'
          min={0}
          max={10000000}
          placeholder='Minimum Price'
        />
        <input
          type='number'
          name='maxPrice'
          min={0}
          max={10000000}
          placeholder='Maximum Price'
        />
        <button>
          <img src='../../../public/search.png' alt='' />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
