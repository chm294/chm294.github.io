import React from 'react';
import SearchContainer from '../SearchRecipes/SearchContainer';
import {
    Link
  } from "react-router-dom";

class NavBarContainer extends React.Component {
    render() {
        return <nav className={`spm-navbar`}>
            <Link to='/'>
                <h1 className={`spm-title`}> Spencer's Meat </h1>
            </Link>
            {/* <SearchContainer /> */}
            <ul>
                <li>basics</li>
                <li>recipes</li>
                <li>welcome</li>
            </ul>
        </nav>
    }
}

export default NavBarContainer;
