import React from 'react';
import Review from './review';

export default class ReviewList extends React.Component {
    render(){
        return (
            <div className="container">
                <Review/>
                <Review/>
            </div>
        )
    }
}