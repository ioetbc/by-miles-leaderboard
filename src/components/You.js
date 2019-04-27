import React, { Component } from 'react';

class You extends Component {
    render () {
        const { position, name } = this.props.player;
        return (
            <div className="card">
                <div className="pill">
                    <span>{name}</span>
                    <span>position: {position}</span>
                </div>
            </div>
        )
    }
};

export default You;
