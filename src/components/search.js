import React, { useRef, useEffect, useState } from 'react';

const Search = ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    onSubmit(searchTerm);
  };
  return (
    <form onSubmit={handleOnSubmit}>
      <div className='ui fluid icon input mb-4'>
        <i className='search icon'></i>
        <input
          ref={inputRef}
          type='text'
          placeholder='Search...'
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
      </div>
    </form>
  );
};

export default Search;
