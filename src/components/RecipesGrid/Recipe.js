import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class Recipe extends React.Component {
    render() {
        return <li className="spm-Recipe">
            <Link to="/brisket">
            <img
                onClick={() => {
                    console.log('YOu clicked on ' + this.props.recipe.title);
                }}
                className={`spm-Recipe-img`} 
                src={require("../static/spmBrisket.png")} // this works but when replaced with imgLink, it can't find module
                alt="background-brisket"
            />
            <span>{this.props.recipe.title}</span>
            </Link>
        </li>
    }
}

export default Recipe;
