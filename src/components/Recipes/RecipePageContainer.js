import React from 'react';

class RecipePageContainer extends React.Component {
    //title, date, description, image, equipment, ingredients, method, share
    render() {
        return <div>
            <div className={`spm-RecipePageContainer-title`}>
                <h3>
                    {this.props.recipe.title}
                </h3>
                <div>
                    {this.props.recipe.lastUpdated}
                </div>
            </div>
            <div className={`spm-RecipePageContainer-description`}>

            </div>
            {/* <div className={`spm-RecipePageContainer-tools`}>
            </div> */}
            {/* <div className={`spm-RecipePageContainer-ingredients`}>
            </div> */}
            <div className={`spm-RecipePageContainer-method`}>
            </div>
        </div>
    }
}

export default RecipePageContainer;
