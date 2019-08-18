import React, { Component } from 'react';
import List from './List';
import Item from './Item';
import DropdownMenu from './DropdownMenu';
 

class ItemsContainer extends Component {

    state = {
        items : [], 
        featuredItem: null
    }

    // handleChange = (event) => {
    //     this.setState({query: event.target.value})
    // }

    // handleSubmit = (event) => {
    //     event.preventDefault();
       
    //     let movie = this.findMovie(this.state.query);
    //     this.setState({featuredMovie: movie});
        
    // }

    findItem = (searchTerm) => (this.state.items.find((item) => (item.title.toLowerCase() === searchTerm.toLowerCase())))

    fetchAPI = (items) => {
        fetch(`https://ghibliapi.herokuapp.com/${items}`)
            .then(res => res.json())
            .then((result) => {
                this.setState({items: result});
            }   
        )
    }

    handleClick = (event) => {
        let item = this.findItem(event.target.textContent);
        this.setState({featuredItem: item})
    }

    dropdownClickHandle = (event) => {
        this.fetchAPI(event.target.textContent)
    }

    render() {
        return (
            <>
            <h1>Ghiblimazing!</h1>
            <h4>Enjoy the world of Studio Ghibli</h4>
          
            <DropdownMenu dropdownClickHandle={this.dropdownClickHandle} />

            {this.state.items === null ? (<div className="featured">{this.state.featuredItem ? <Item item={this.state.featuredItem}/> : <h4>Click a list item to see more...</h4>}</div>) : null}
            
            
            <h1>From Studio Ghibli</h1>
            <div id="list-component">
                <List handleClick={this.handleClick} items={this.state.items}/>
            </div>

            </>
        )
    }

}

export default ItemsContainer;

