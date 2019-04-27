import React, { Component } from 'react';

class Other extends Component {
    render () {
        const { name, position } = this.props.player;
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


export default Other;
