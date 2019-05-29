import React, { Component } from 'react';
import { Input } from 'reactstrap';
import './ImageDisplay.css';

class ImageDisplay extends Component {
    render() {
        return (
            <div>
               <img className="image" id="target" alt='' />
               {
                    this.props.display ? <Input className='input_text' onClick={this.props.onClick} type='textarea' onChange={this.props.onChange} /> : null
                }
            </div>
        )
    }
}

export default ImageDisplay
