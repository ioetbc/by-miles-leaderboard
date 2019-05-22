import React, { Component } from 'react'
import Games from './Games';
export class PlayerStats extends Component {
    render() {
        const { name, index } = this.props;
        return (
            <div className="stats">
                <Games name={name} index={index} />
            </div>
        )
    }
}

export default PlayerStats
