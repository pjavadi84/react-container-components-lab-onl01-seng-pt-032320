import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'CCDEWUhnrS9TIBc3TUeGiU36BJ6P4Vjz';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            reviews: []
        }
    }

    componentDidMount(){
        fetch(URL)
        .then(response => response.json())
        .then(reviewData => this.setState({
            reviews: reviewData.results
        }))
    }


    render() {
        return (
            <div className="latest-movie-reviews">
                <h3>The latest reviews: </h3>
                <MovieReviews reviews = {this.state.reviews} />
            </div>
        );
    }
}

export default LatestMovieReviewsContainer;
