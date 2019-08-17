import React, { Component } from 'react';

class List extends Component {
    

    render() {
        return (
            <>
            {this.props.items.map(item => <li key={item.title || item.name} onClick={this.props.handleClick}>{item.title || item.name}</li>) }
            </>
        )
    }

}

export default List;
