import React, { Component } from 'react';
import { ReactComponent as Tick } from '../assets/tick.svg';
import HOCPlayer from './HOCPlayer'

class You extends Component {
    render () {
        const { position, name, photoURL } = this.props.player;
        const firstName = name.split(' ')[0];
        return (
            <div className="pill-wrapper">
                <div className="pill">
                    <span><img className="thumbnail-image" src={photoURL} /></span>
                    <span>{firstName}</span>
                    <span>{position}st</span>
                    <span>details</span>
                </div>
                <span className="signed-in"><Tick /></span>
            </div>
        );
    }
};

export default HOCPlayer(You);
