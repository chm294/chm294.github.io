import React from 'react';
import RecipesList from './RecipesList';
import SearchContainer from '../SearchRecipes/SearchContainer';

class RecipesGridContainer extends React.Component {
    render() {
        return <div className="spm-RecipesGridContainer">
            <SearchContainer />
            <RecipesList
                allRecipes={this.props.allRecipes}
            />
        </div>
    }
}

export default RecipesGridContainer;
