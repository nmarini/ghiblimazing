import React, { Component } from 'react';

class Movies extends Component {

    render() {
        return (
            <>
            {this.props.movies.map(movie => <li key={movie.title} onClick={this.props.handleMovieClick}>{movie.title}</li>) }
            </>
        )
    }

}

export default Movies;
