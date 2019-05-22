import React, { Component } from 'react'
import PlayerGames from './PlayerGames'

export class PlayerDetails extends Component {

    render() {
        return (
            <div>
                <PlayerGames games={this.props.games} />
            </div>
        )
    }
}

export default PlayerDetails
