import React, { Component } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

class DropdownMenu extends Component {

    render() {
        return (
            <DropdownButton id="dropdown-variants-info" title="Choose a List" variant="info" key="info">
                <Dropdown.Item onClick={this.props.dropdownClickHandle} name="films">Films</Dropdown.Item>
                <Dropdown.Item onClick={this.props.dropdownClickHandle} name="people">Characters</Dropdown.Item>
                <Dropdown.Item onClick={this.props.dropdownClickHandle} name="locations">Locations</Dropdown.Item>
            </DropdownButton>
        )
    }
}

  export default DropdownMenu;


     