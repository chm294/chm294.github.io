import React from 'react';
import RecipesList from './RecipesList';
import SearchContainer from '../SearchRecipes/SearchContainer';

class RecipesGridContainer extends React.Component {
    filterRecipes() {
    }

    render() {
        return <div className="spm-RecipesGridContainer">
            <SearchContainer 
                allRecipes={this.props.allRecipes}
            />
            <RecipesList
                allRecipes={this.props.allRecipes}
            />
        </div>
    }
}

export default RecipesGridContainer;
