import React, { Component } from 'react';
import HOCPlayer from './HOCPlayer';

class Other extends Component {
    render () {
        const { name, position, photoURL } = this.props.player;
        const firstName = name.split(' ')[0];
        return (
            <div className="pill-wrapper">
                <div className="pill">
                <span><img className="thumbnail-image" src={photoURL} /></span>
                <span>{firstName}</span>
                <span>{position}st</span>
                <span>details</span>
                </div>
            </div>
        )
    }
};


export default HOCPlayer(Other);
