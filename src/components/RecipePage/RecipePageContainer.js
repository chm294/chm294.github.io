import React from 'react';
import Description from './Description';
import Part from './Part';


class RecipePageContainer extends React.Component {
    //title, date, description, image, equipment, ingredients, method, share
    render() {
        const { 
            title,
            lastUpdated,
            description,
            tools,
            parts,
            keywords,
            cooktime,
            difficulty,
            path,
            related,
            pairsWith,
        } = this.props.recipe;

return <div className='spm-RecipePageContainer'>
            <div className={`spm-RecipePageContainer-title`}>
                <h3>
                    {title}
                </h3>
                <div>
                    {lastUpdated}
                </div>
            </div>
            <section className={`spm-RecipePageContainer-section spm-RecipePageContainer-description`}>
                <Description
                    description={ description } 
                />
            </section>
            {/* <div className={`spm-RecipePageContainer-tools`}>
            </div> */}
            {/* <div className={`spm-RecipePageContainer-ingredients`}>
            </div> */}
            { parts.map((part) => {
                return <section className={`spm-RecipePageContainer-section spm-RecipePageContainer-part`}>
                    <Part
                        ingredients={part.ingredients}
                        method={part.method}
                    />
                </section>
            })}
        </div>
    }
}

export default RecipePageContainer;
