import React, { Component } from 'react';
import List from './List';
import Item from './Item';
import DropdownMenu from './DropdownMenu';
 

class ItemsContainer extends Component {

    state = {
        items : [], 
        query : 'films',
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

    fetchAPI = () => {
        fetch(`https://ghibliapi.herokuapp.com/${this.state.query}`)
            .then(res => res.json())
            .then((result) => {
                this.setState({items: result});
            }   
        )
    }

    componentDidMount() {
        this.fetchAPI()
    }

    handleClick = (event) => {
        let item = this.findItem(event.target.textContent);
        this.setState({featuredItem: item})
    }

    dropdownClickHandle = (event) => {
        
    }

    render() {
        return (
            <>
            <h1>Ghiblimazing!</h1>
            <h4>Enjoy the world of Studio Ghibli</h4>
          
            <DropdownMenu dropdownClickHandle={this.dropdownClickHandle()} />
    
            <div className="featured">
                {this.state.featuredItem ? <Item item={this.state.featuredItem}/> : <h4>Click a list item to see more...</h4>}
            </div>
            
            <h1>From Studio Ghibli</h1>
            <List handleClick={this.handleClick} items={this.state.items}/>

            </>
        )
    }

}

export default ItemsContainer;

