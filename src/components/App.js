import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NavBarContainer from './NavBar/NavBarContainer';
import RecipesGridContainer from './RecipesGrid/RecipesGridContainer';
import './App.scss';
import RecipePageContainer from './Recipes/RecipePageContainer';
import AllRecipes from '../data/Recipes';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: false,
      isResponsive: false,
      path: '',
    };
  }

  updateDimensions() {
    if(window.innerWidth < 500) {
      this.setState({ isMobile: true });
    } else if (window.innerWidth < 769) {
      this.setState({
        isMobile: false,
        isResponsive: true,
      });
    } else {
      this.setState({
        isMobile: false,
        isResponsive: false,
      })
    }
  }

  /**
   * Add event listener for responsiveness
   */
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  render() {
    const { isMobile, isResponsive } = this.props;
    return (
      <Router>
        <div className="spm-App">
          <header className="App-header">
            <NavBarContainer
              isMobile={ isMobile }
              isResponsive={ isResponsive }
            />
          </header>
          <div className="spm-App-mainContent">
            <Switch>
              {AllRecipes.map((recipe) => {
                return <Route path={`/${recipe.path}`}>
                  <RecipePageContainer
                    recipe={recipe}
                  />
                </Route>
              })}
              <Route path="/">
                  <RecipesGridContainer
                    isMobile={ isMobile }
                    isResponsive={ isResponsive }
                    allRecipes={AllRecipes}
                  />
              </Route>
            </Switch>
            </div>
        </div>
      </Router>
    );
  }
}

export default App;
