import React, { Component } from 'react';

class List extends Component {

    render() {
        return (
            <>
            {this.props.items.map(item => <li key={item.title} onClick={this.props.handleClick}>{item.title}</li>) }
            </>
        )
    }

}

export default List;
