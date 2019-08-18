import React, { Component } from 'react';

class DropdownMenu extends Component {

    render() {
        return (
            <div>
                <h5>Choose a List</h5>

                <div>
                    <button onClick={this.props.dropdownClickHandle}>films</button>
                    <button onClick={this.props.dropdownClickHandle}>people</button>
                    <button onClick={this.props.dropdownClickHandle}>locations</button>
                    <button onClick={this.props.dropdownClickHandle}>species</button>
                    <button onClick={this.props.dropdownClickHandle}>vehicles</button>
                </div>
                
            </div>
        )
    }
}

  export default DropdownMenu;


     