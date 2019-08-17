import React from 'react';

const Item = ({item}) => (
    <>

        <h3>Title: <em>{ item.title }</em></h3> 
            <p>Released: <em>{ item.release_date }</em></p>
        <h4>Director: <em>{ item.director }</em></h4>
        <p>
            <em>{ item.description }</em>
        </p>

    </>
  )

  export default Item;