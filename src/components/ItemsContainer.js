import React, { Component } from 'react';
import List from './List';
import Item from './Item';
import DropdownMenu from './DropdownMenu';
 

class ItemsContainer extends Component {

    state = {
        items : [], 
        featuredItem : ''
    }

    // handleChange = (event) => {
    //     this.setState({query: event.target.value})
    // }

    // handleSubmit = (event) => {
    //     event.preventDefault();
       
    //     let movie = this.findMovie(this.state.query);
    //     this.setState({featuredMovie: movie});
        
    // }

    findItem = (searchTerm) => (this.state.items.find((item) => (item.title.toLowerCase() === searchTerm.toLowerCase() || item.name.toLowerCase() === searchTerm.toLowerCase())))

    fetchAPI = (items) => {
        fetch(`https://ghibliapi.herokuapp.com/${items}`)
            .then(res => res.json())
            .then((result) => {
                this.setState({items: result});
            }   
        )
    }
    
    handleClick = (event) => {
        event.preventDefault()
        console.log(event.target.textContent)
        let item = this.findItem(event.target.textContent);
        // console.log(item)
        this.setState({featuredItem: item})
        // console.log(this.state.featuredItem)
    }

    dropdownClickHandle = (event) => {
        this.fetchAPI(event.target.textContent.toLowerCase())
    }

    render() {
        return (
            <>
            <h1>Ghiblimazing!</h1>
            <h4>Enjoy the world of Studio Ghibli</h4>
          
            <DropdownMenu dropdownClickHandle={this.dropdownClickHandle} />

            

            {this.state.featuredItem !== '' ? <Item item={this.state.featuredItem}/> : <h4>Click a list item to see more...</h4>}
            
            
            <h1>From Studio Ghibli</h1>
            <div id="list-component">
                <List handleClick={this.handleClick} items={this.state.items}/>
            </div>

            </>
        )
    }

}

export default ItemsContainer;

