import React, { Component } from 'react';

class Item extends Component {
    
    itemProperties = () => (Object.entries(this.props.item).map((info) => info))

    itemTitle = () => (this.itemProperties().find(prop => prop[0] === 'name' || prop[0] === 'title'))
  
    render() {
        return (
            <>
            <h3>{this.itemTitle()[0].toUpperCase()}: <em>{this.itemTitle()[1]}</em></h3>

                {this.itemProperties().map((prop, index) => {
                    if (prop[0] !== this.itemTitle()[0] && prop[0] !== 'id') {
                        if (prop[1].toString().includes("http")) {
                            return <li key={index}><a href={prop[1]} target="_blank"><b>{prop[0]}</b></a></li>
                        } else {
                            return <li key={index}><b>{prop[0].toUpperCase()}</b>: <em>{prop[1]}</em></li> 
                        }
                    }
                })}
            </>
        )
    }

    
}

  export default Item;