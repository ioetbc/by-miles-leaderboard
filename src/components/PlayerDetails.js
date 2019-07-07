import React, { Component } from 'react'
import PlayerGames from './PlayerGames'

export class PlayerDetails extends Component {
    render() {
        return (
            <PlayerGames games={this.props.games} />
        )
    }
}

export default PlayerDetails
