import React from 'react';
import './SearchBox.css';

const SearchBox = props => {
  return (
    <div className='fl w-90 tc'>
      <input className='search' onChange={props.searchChangeHandler} />
    </div>
  );
}

export default SearchBox;