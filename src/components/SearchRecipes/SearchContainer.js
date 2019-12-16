import React from 'react';

class SearchContainer extends React.Component {
    render() {
        return <div className="spm-searchContianer">
            <label htmlFor="search">
                <input
                    className="spm-search"
                    placeholder="HUNGRY?"
                    id="search"
                    type="search"
                />
            </label>
        </div>
    }
}

export default SearchContainer;
