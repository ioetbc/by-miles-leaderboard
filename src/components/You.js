import React, { Component } from 'react';
import { ReactComponent as Tick } from '../assets/tick.svg';

class You extends Component {
    render () {
        const { position, name } = this.props.player;

        const firstName = name.split(' ')[0];
        return (
            <div className="pill-wrapper">
                <div className="pill">

                    <span>{firstName}</span>
                    <span>{position}st</span>
                    <span>details</span>
                </div>
                <span className="signed-in"><Tick /></span>
            </div>
        );
    }
};

export default You;
