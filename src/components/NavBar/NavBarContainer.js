import React from 'react';

class NavBarContainer extends React.Component {
    render() {
        return <nav className={`spm-navbar`}>
            <ul>
                <li>
                    basics
                </li>
                <li>
                    recipes
                </li>
                <li>
                    welcome
                </li>
            </ul>
        </nav>
    }
}

export default NavBarContainer;
