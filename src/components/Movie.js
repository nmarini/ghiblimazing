import React, { Component } from 'react';

const Movie = ({film}) => (
    <>

        <h3>Title: <em>{ film.title }</em></h3> 
            <p>Released: <em>{ film.release_date }</em></p>
        <h4>Director: <em>{ film.director }</em></h4>
        <p>
            <em>{ film.description }</em>
        </p>

    </>
  )

  export default Movie;