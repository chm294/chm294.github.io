import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NavBarContainer from './NavBar/NavBarContainer';
import RecipesGridContainer from './RecipesGrid/RecipesGridContainer';
import './App.scss';
import RecipePageContainer from './RecipePage/RecipePageContainer';
import AllRecipes from '../data/Recipes';
import Basics from './Basics/Basics';
import Homepage from './Welcome/Homepage';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: false,
      isResponsive: false,
      path: '',
      showRecipes: AllRecipes,
    };

    this.filterRecipes = this.filterRecipes.bind(this);
    this.updateLocationPath = this.updateLocationPath.bind(this);
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

  filterRecipes(searchString) {
    searchString = searchString.toLowerCase();
    const matchingRecipes = [];
    
    this.props.allRecipes.map((recipe) => {
        if(recipe.title.toLowerCase().includes(searchString)) {
            matchingRecipes.push(recipe);
        } else if (recipe.keywords.some((keyword) => {
            return searchString === keyword.toLowerCase();
        })) {
            matchingRecipes.push(recipe);
        };
    });
    this.setState({ showRecipes : matchingRecipes });
}

updateLocationPath() {
  this.setState({ path: window.location.path })
}

  /**
   * Add event listener for responsiveness
   */
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  /**
   * instagram handle in navbar
   * redesign navbar to burger
   * http://www.mikiyakobayashi.com/projects
   */

  render() {
    const { isMobile, isResponsive } = this.props;
    return (
      <Router>
        <div className="spm-App">
          <header className="App-header">
            <NavBarContainer
              isMobile={ isMobile }
              isResponsive={ isResponsive }
              pathName={window.location.pathname}
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
              <Route path="/basics">
                  <Basics/>
              </Route>
              <Route path="/recipes">
                  <Homepage />
              </Route>
              <Route path="/">
                  <RecipesGridContainer
                    isMobile={ isMobile }
                    isResponsive={ isResponsive }
                    allRecipes={this.state.showRecipes}
                    filterRecipes={this.filterRecipes}
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
