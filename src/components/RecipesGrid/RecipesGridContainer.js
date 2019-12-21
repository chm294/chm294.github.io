import React from 'react';
import RecipesList from './RecipesList';

class RecipesGridContainer extends React.Component {
    constructor (props) {
        super(props);
    }

    render() {
        return <div className="spm-RecipesGridContainer">
            <RecipesList
                allRecipes={this.props.allRecipes}
                isMobile={this.props.isMobile}
            />
        </div>
    }
}

export default RecipesGridContainer;
