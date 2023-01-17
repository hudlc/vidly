import React, { Component } from 'react';
import { FaHeart } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa';

class LikeButton extends Component {

    render() { 
        return (
            <p >
                <span onClick={this.props.onLike}> {this.props.like ?  <FaHeart/> : <FaRegHeart/>} </span> 
            </p> 
        );
    }
}
 
export default LikeButton;