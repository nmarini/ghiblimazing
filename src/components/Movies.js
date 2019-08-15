import React, { Component } from 'react';
import Movie from './Movie';

class Movies extends Component {

    render() {
        return (
            <>
            {this.props.movies.map(movie => <li key={movie.title} onClick={this.props.handleClick}>{movie.title}</li>) }
            </>
        )
    }

}

export default Movies;
