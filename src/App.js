import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// import axios from 'axios';
import './App.css';
import CardList from './CardList';
import SearchBox from './SearchBox';

import { setSearchField, requestKitties } from './actions';

const mapStateToProps = state => {
  return {
    searchField: state.searchKitties.searchField,
    kitties: state.requestKitties.kitties,
    isPending: state.requestKitties.isPending,
    error: state.requestKitties.error
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestKitties: () => dispatch(requestKitties())
  }
};

const App = props => {
  const { searchField, onSearchChange, onRequestKitties, kitties, isPending } = props;

  useEffect(() => {
    onRequestKitties();
  })

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios(
  //       'https://jsonplaceholder.typicode.com/users',
  //     );
  //     setData(result.data);
  //   };
  //   fetchData();
  // }, []);

  const filteredKitties = kitties.filter(kitty => {
    return kitty.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
    <div className='App'>
      <h1 className='header f1 tc bb b--white'>Kittie Homies</h1>
      <SearchBox searchChangeHandler={onSearchChange} />
      <CardList kitties={filteredKitties} />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
