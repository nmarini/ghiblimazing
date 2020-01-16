import React, { Component } from 'react';

class List extends Component {
    

    render() {
        return (
            <>
            {this.props.items.map(item => <button className="info" key={item.title || item.name} onClick={this.props.handleClick}>{item.title || item.name}</button>) }
            </>
        )
    }

}

export default List;
