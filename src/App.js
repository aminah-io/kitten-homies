import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import CardList from './CardList';
import SearchBox from './SearchBox';

function App() {
  const [data, setData] = useState([]);
  const [searchField, setSearchField] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://jsonplaceholder.typicode.com/users',
      );
      setData(result.data);
    };
    fetchData();
  }, []);

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  const filteredKittens = data.filter(kitten => {
    return kitten.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
    <div className='App'>
      <h1 className='header f1 tc bb b--white'>Kitten Homies</h1>
      <SearchBox searchChangeHandler={onSearchChange} />
      <CardList kittens={filteredKittens} />
    </div>
  );
}

export default App;
