import React, { Component } from 'react';

class DropdownMenu extends Component {

    revealLists = () => {
    //     document.getElementById('list-container').textContainer = (
    //         <ul>
    //             <li onClick={this.props.dropdownClickHandle}>films</li>
    //         </ul>
    //     )
    }

    render() {
        return (
            <div>
                <button onClick={this.revealLists()}>
                    Choose a List
                </button>

                <div id="list-container">
                </div>
                
            </div>
        )
    }
}

  export default DropdownMenu;


     