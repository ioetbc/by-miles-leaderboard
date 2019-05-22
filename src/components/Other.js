import React, { Component } from 'react';
import HOCPlayer from './HOCPlayer';
import moment from 'moment';

class Other extends Component {
    render () {
        const { name, position, photoURL } = this.props.player;
        const firstName = name.split(' ')[0];
        console.log('other position', position)
        console.log('other', moment(position).format('Do'))
        return (
            <div className="pill-wrapper">
                <div className="pill">
                <span><img className="thumbnail-image" src={photoURL} /></span>
                <span>{firstName}</span>
                <span>{moment(position).format('do')}</span>
                <span>details</span>
                </div>
            </div>
        )
    }
};


export default HOCPlayer(Other);
