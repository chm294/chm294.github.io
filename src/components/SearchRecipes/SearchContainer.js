import React from 'react';

class SearchContainer extends React.Component {    
    constructor (props) {
        super(props);
        this.handleSearch = this.handleSearch.bind(this);
    }
    handleSearch(event) {
        this.props.filterRecipes(event.target.value);
    }
        
    render() {
        return <div className="spm-searchContianer">
            <label htmlFor="search">
                <input
                    onChange={this.handleSearch}
                    className="spm-search"
                    placeholder="WHAT'S COOKIN GOOD LOOKIN?"
                    id="search"
                    type="search"
                />
            </label>
        </div>
    }
}

export default SearchContainer;
