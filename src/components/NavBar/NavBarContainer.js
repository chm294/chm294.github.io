import React from 'react';
import {
    Link
} from "react-router-dom";
import SearchContainer from '../SearchRecipes/SearchContainer';


class NavBarContainer extends React.Component {
    render() {
        return <nav className={`spm-NavBarContainer`}>
            <Link to='/'>
                <h1 className={`spm-NavBarContainer-title`}> Spencer's Meat </h1>
            </Link>
            {window.location.pathname === '/' ? 
                <SearchContainer 
                    filterRecipes={this.props.filterRecipes}
                /> : null}
            {/* <ul>
                <Link to="/basics">
                    <li className={`spm-NavBarContainer-link`}>Essentials</li>
                </Link>
                <Link to="/recipes">
                    <li className={`spm-NavBarContainer-link`}>Recipes</li>
                </Link>
            </ul> */}
        </nav>
    }
}

export default NavBarContainer;
