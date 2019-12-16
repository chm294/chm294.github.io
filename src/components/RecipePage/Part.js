import React from 'react';

export default class Part extends React.Component {
    render() {
        return <div className="spm-Part">
            <ul className='spm-ingredients'>
                { this.props.ingredients.map( (ingredient) => {
                    return <li> {ingredient} </li>
                })}
            </ul>
            <ul className='spm-method'>
                { this.props.method.map( (step) => {
                    return <li> {step} </li>
                })}
            </ul>
        </div>
    }
}

