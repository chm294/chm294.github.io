import React from 'react';
import Recipe from './Recipe';

class RecipesList extends React.Component {
    render() {
        return <ul className="spm-RecipesList">
            {this.props.allRecipes.map((recipe) => {
                return <Recipe
                            key={recipe.title}
                            recipe={recipe}
                            isMobile={this.props.isMobile}
                        />
            })}
        </ul>
    }
}

export default RecipesList;
