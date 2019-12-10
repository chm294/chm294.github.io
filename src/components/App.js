import React from 'react';
import NavBarContainer from './NavBar/NavBarContainer';
import SearchContainer from './SearchRecipes/SearchContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className={`spm-title`}> Spencer's Meat </h1>
        <SearchContainer />
        <NavBarContainer />
      </header>
      {/* <img className={`spm-background`} src={require('../static/spmBrisket.png')} alt="background-brisket"/> */}
    </div>
  );
}

export default App;
