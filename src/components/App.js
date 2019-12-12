import React from 'react';
import NavBarContainer from './NavBar/NavBarContainer';
import SearchContainer from './SearchRecipes/SearchContainer';
import RecipesGridContainer from './RecipesGrid/RecipesGridContainer';
import './App.scss';

const allRecipes = [
  {
    title: 'beef brisket',
    lastUpdated: '12/8/19',
    keywords: ['meat', 'protein', 'smoked'],
    cooktime: 8,
    difficulty: 'expert',
    gridImg: './static/spmBrisket.pngg'
  },
  {
    title: 'beef brisket',
    lastUpdated: '12/8/19',
    keywords: ['meat', 'protein', 'smoked'],
    cooktime: 8,
    difficulty: 'expert',
    gridImg: './static/spmBrisket.pngg'
  },
  {
    title: 'beef brisket',
    lastUpdated: '12/8/19',
    keywords: ['meat', 'protein', 'smoked'],
    cooktime: 8,
    difficulty: 'expert',
    gridImg: './static/spmBrisket.pngg'
  },
  {
    title: 'beef brisket',
    lastUpdated: '12/8/19',
    keywords: ['meat', 'protein', 'smoked'],
    cooktime: 8,
    difficulty: 'expert',
    gridImg: './static/spmBrisket.pngg'
  },
  {
    title: 'beef brisket',
    lastUpdated: '12/8/19',
    keywords: ['meat', 'protein', 'smoked'],
    cooktime: 8,
    difficulty: 'expert',
    gridImg: './static/spmBrisket.pngg'
  },
  {
    title: 'beef brisket',
    lastUpdated: '12/8/19',
    keywords: ['meat', 'protein', 'smoked'],
    cooktime: 8,
    difficulty: 'expert',
    gridImg: './static/spmBrisket.pngg'
  },
  {
    title: 'beef brisket',
    lastUpdated: '12/8/19',
    keywords: ['meat', 'protein', 'smoked'],
    cooktime: 8,
    difficulty: 'expert',
    gridImg: './static/spmBrisket.pngg'
  },
  {
    title: 'beef brisket',
    lastUpdated: '12/8/19',
    keywords: ['meat', 'protein', 'smoked'],
    cooktime: 8,
    difficulty: 'expert',
    gridImg: './static/spmBrisket.pngg'
  },

]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className={`spm-title`}> Spencer's Meat </h1>
        <SearchContainer />
        <NavBarContainer />
      </header>
      <RecipesGridContainer
        allRecipes={allRecipes}
      />
    </div>
  );
}

export default App;
