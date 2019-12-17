import React from 'react';
import {
    Link
  } from "react-router-dom";

  class Recipe extends React.Component {
    render() {
        return <li className="spm-Recipe">
            <Link to={`/${this.props.recipe.path}`}>
                <div className="spm-Recipe-imgCover">
                    <img
                        onClick={() => {
                        }}
                        className={`spm-Recipe-img`} 
                        src={require(`../static/imgs/${this.props.recipe.path}.png`)}
                        alt={`image of ${this.props.recipe.title}`}
                    />
                </div>
                <div className="spm-Recipe-label">{this.props.recipe.title}</div>
                <div className="spm-Recipe-date">{this.props.recipe.lastUpdated}</div>
                </Link>
        </li>
    }
}

export default Recipe;
