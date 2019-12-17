import React from 'react';
import RecipesList from './RecipesList';
import SearchContainer from '../SearchRecipes/SearchContainer';

class RecipesGridContainer extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            showRecipes: this.props.allRecipes,
        }

        this.filterRecipes = this.filterRecipes.bind(this);
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

    render() {
        return <div className="spm-RecipesGridContainer">
            <SearchContainer 
                filterRecipes={this.filterRecipes}
            />
            <RecipesList
                allRecipes={this.state.showRecipes}
            />
        </div>
    }
}

export default RecipesGridContainer;
