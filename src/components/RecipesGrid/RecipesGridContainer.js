import React from 'react';
import RecipesList from './RecipesList';

class RecipesGridContainer extends React.Component {
    render() {
        return <div className="spm-RecipesGridContainer">
            <RecipesList
                allRecipes={this.props.allRecipes}
            />
        </div>
    }
}

export default RecipesGridContainer;
