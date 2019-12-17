import React from 'react';
import SearchContainer from '../SearchRecipes/SearchContainer';
import {
    Link
  } from "react-router-dom";

class NavBarContainer extends React.Component {
    render() {
        return <nav className={`spm-NavBarContainer`}>
            <Link to='/'>
                <h1 className={`spm-NavBarContainer-title`}> Spencer's Meat </h1>
            </Link>
            <ul>
                <Link to="/basics">
                    <li className={`spm-NavBarContainer-link`}>Essentials</li>
                </Link>
                <Link to="/recipes">
                    <li className={`spm-NavBarContainer-link`}>Recipes</li>
                </Link>
            </ul>
        </nav>
    }
}

export default NavBarContainer;
