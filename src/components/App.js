import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NavBarContainer from './NavBar/NavBarContainer';
import SearchContainer from './SearchRecipes/SearchContainer';
import RecipesGridContainer from './RecipesGrid/RecipesGridContainer';
import RouterSample from './RouterSample';
import './App.scss';

const allRecipes = [
  {
    title: 'beef brisket',
    lastUpdated: '12/8/19',
    keywords: ['meat', 'protein', 'smoked'],
    cooktime: 8,
    difficulty: 'expert',
    gridImg: '../../static/spmBrisket.png',
    path: 'brisket',
  },
  {
    title: 'beef brisket',
    lastUpdated: '12/8/19',
    keywords: ['meat', 'protein', 'smoked'],
    cooktime: 8,
    difficulty: 'expert',
    gridImg: '../../static/spmBrisket.png',
    path: 'brisket',
  },
  {
    title: 'beef brisket',
    lastUpdated: '12/8/19',
    keywords: ['meat', 'protein', 'smoked'],
    cooktime: 8,
    difficulty: 'expert',
    gridImg: '../../static/spmBrisket.png',
    path: 'brisket',
  },
  {
    title: 'beef brisket',
    lastUpdated: '12/8/19',
    keywords: ['meat', 'protein', 'smoked'],
    cooktime: 8,
    difficulty: 'expert',
    gridImg: '../../static/spmBrisket.png',
    path: 'brisket',
  },
  {
    title: 'beef brisket',
    lastUpdated: '12/8/19',
    keywords: ['meat', 'protein', 'smoked'],
    cooktime: 8,
    difficulty: 'expert',
    gridImg: '../../static/spmBrisket.png',
    path: 'brisket',
  },
  {
    title: 'beef brisket',
    lastUpdated: '12/8/19',
    keywords: ['meat', 'protein', 'smoked'],
    cooktime: 8,
    difficulty: 'expert',
    gridImg: '../../static/spmBrisket.png',
    path: 'brisket',
  },
  {
    title: 'beef brisket',
    lastUpdated: '12/8/19',
    keywords: ['meat', 'protein', 'smoked'],
    cooktime: 8,
    difficulty: 'expert',
    gridImg: '../../static/spmBrisket.png',
    path: 'brisket',
  },
  {
    title: 'beef brisket',
    lastUpdated: '12/8/19',
    keywords: ['meat', 'protein', 'smoked'],
    cooktime: 8,
    difficulty: 'expert',
    gridImg: '../../static/spmBrisket.png',
    path: 'brisket',
  },

]

function App() {
  return (
    <Router>
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

      <Switch>
          <Route path="/brisket">
            <RouterSample />
          </Route>
          <Route path="/">
            <RouterSample />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
