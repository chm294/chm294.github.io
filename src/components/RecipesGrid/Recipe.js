import React from 'react';

class Recipe extends React.Component {
    render() {
        return <li className="spm-Recipe">
            <img className={`spm-Recipe-img`} src={this.props.recipe.gridImg} alt="background-brisket"/>
            <span>{this.props.recipe.title}</span>
        </li>
    }
}

export default Recipe;
