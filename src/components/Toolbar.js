import React, { Component } from 'react';
import ImageDisplay from './ImageDisplay';
import { ListGroup,
        Container,
        Button,
        Dropdown,
        // Input,
        DropdownToggle,
        DropdownMenu,
        DropdownItem } from 'reactstrap';
import { FaImages, FaFont, FaShapes, FaLayerGroup } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Toolbar.css'

class Toolbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: false,
            btnDropright1: false,
            btnDropright: false,
            message: ''
        }
        this.toggle = this.toggle.bind(this)
        this.toggle1 = this.toggle1.bind(this)
        this.toggle2 = this.toggle2.bind(this)
        this.onChange = this.onChange.bind(this)
        this.onClick = this.onClick.bind(this)
    }

    onChange(e) {
        console.log('text is changing!')
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onClick() {
        console.log('Plain text Added!')
        this.setState({
            display: true
        })

    }

    toggle() {
        this.setState({
            btnDropright: !this.state.btnDropright
        })
    }

    toggle1() {
        this.setState({
            btnDropright1: !this.state.btnDropright1
        })
    }

    toggle2() {
        this.setState({
            btnDropright2: !this.state.btnDropright2
        })
    }

    render() {
        return (
            <div>
                <ListGroup>
                <ImageDisplay onChange={this.onChange} onClick={this.onClick} display={this.state.display} />
                    <Container className='container'>
                        <ul>
                        <Dropdown direction="right" isOpen={this.state.btnDropright} toggle={this.toggle}>
                        <DropdownToggle color='transparent' caret>
                            <FaFont  /> Add Text
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem onClick={this.onClick}>Add Plain Text</DropdownItem>
                            <DropdownItem className='divider' divider />
                            <DropdownItem>Add Decorative Text</DropdownItem>
                        </DropdownMenu>
                        </Dropdown>
                        <DropdownItem divider />
                        <Dropdown  className='btnDropImages' direction="right" isOpen={this.state.btnDropright1} toggle={this.toggle1}>
                        <DropdownToggle color='transparent' caret>
                            <FaImages  /> Add Photos
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>Add Online Photo</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>Add Local Photo</DropdownItem>
                            <DropdownItem divider />
                        </DropdownMenu>
                        </Dropdown>
                        <DropdownItem divider />
                        <Button color='transparent'><FaShapes /> Add ClipArt</Button>
                        <DropdownItem divider />

                        <Dropdown direction="right" isOpen={this.state.btnDropright2} toggle={this.toggle2}>
                        <DropdownToggle color='transparent' caret>
                            <FaLayerGroup  /> Add Layout
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>Add Table</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>Add Schedule</DropdownItem>
                        </DropdownMenu>
                        </Dropdown>
                        </ul>
                    </Container>
                </ListGroup>
            </div>
        )
    }
}

export default Toolbar
