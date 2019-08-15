import React, { Component } from 'react';

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
