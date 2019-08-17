import React, { Component } from 'react';
import Movies from './Movies';
import Movie from './Movie';

class MoviesContainer extends Component {

    state = {
        movies : [], 
        query : '',
        featuredMovie: null
    }

    handleChange = (event) => {
        this.setState({query: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
       
        let movie = this.findMovie(this.state.query);
        this.setState({featuredMovie: movie});
        
    }

    findMovie = (title) => (
        this.state.movies.find((movie) => (movie.title.toLowerCase() === title.toLowerCase()))
    )

    componentDidMount() {

        fetch(`https://ghibliapi.herokuapp.com/films`)
            .then(res => res.json())
            .then((result) => {
                this.setState({movies: result});
            }   
        )
    }

    handleMovieClick = (event) => {
        let movie = this.findMovie(event.target.innerHTML);
        this.setState({featuredMovie: movie})
    }

    render() {
        return (
            <>
            <h1>Ghiblimazing!</h1>
            {/* <form onSubmit={this.handleSubmit}>
            <input 
                type="text" 
                onChange={this.handleChange}
            /> */}
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Choose a List 
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href='#'>ListName</Dropdown.Item>
                    <Dropdown.Item href='#'>ListName</Dropdown.Item>
                    <Dropdown.Item href='#'>ListName</Dropdown.Item>
                </Dropdown.Menu> 
            </Dropdown>
            <button type="submit">Search</button>
            </form>
            <div className="featured">
                {this.state.featuredMovie ? <Movie film={this.state.featuredMovie}/> : <h4>Click a list item to see more...</h4>}
            </div>
            
            <h1>From Studio Ghibli</h1>
            <Movies handleMovieClick={this.handleMovieClick} movies={this.state.movies}/>

            </>
        )
    }

}

export default MoviesContainer;
