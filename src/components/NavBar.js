import React, { Component } from 'react';
import { 
    Navbar, 
    NavbarBrand, 
    Dropdown,
    // Input, 
    DropdownMenu, 
    DropdownToggle, 
    DropdownItem, 
     } from 'reactstrap';
import './NavBar.css'

class NavBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dropdownOpen: false
        };
        this.toggle = this.toggle.bind(this)
        // this.imageChangeHandler = this.imageChangeHandler.bind(this)
    }

    // imageChangeHandler(e) {
    //     console.log('picture changed')
    //     this.setState({
    //       image: URL.createObjectURL(e.target.files[0])
    //     })
    //   }

    toggle() {
        this.setState(prevState => ({
          dropdownOpen: !prevState.dropdownOpen
        }));
      }

    render() {
        return (
            <div>
                <Navbar className='Navbar'>
                <Dropdown className='dropdown' isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <NavbarBrand>Create Template</NavbarBrand>
                <DropdownToggle color='transparent' className='dropdown_toggle'  caret>
                Choose Template
                </DropdownToggle>
                    <DropdownMenu className='dropdown_menu'>
                        <DropdownItem>Create New Template</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Choose Existing Template</DropdownItem>
                    {/* <DropdownItem className='dropdown_item'>
                        <Input className='image-handler' type='file' onChange={this.imageChangeHandler} />
                    </DropdownItem> */}
                    </DropdownMenu>
                </Dropdown>
                </Navbar>
            </div>
        )
    }
}

export default NavBar
