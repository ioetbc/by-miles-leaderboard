import React, { Component } from 'react'

export class PlayerGames extends Component {

    state = { showStats: false }

    render() {
        const { games=[] } = this.props
        return (
            <div>
                <h3>Games</h3>
                <ol>
                    {games.map((game, i) => {
                        return (
                            <li key={i}>
                                <p><strong>{game.winner.name.split(' ')[0]}</strong> vs {game.loser.name.split(' ')[0]}</p>
                            </li>
                        )
                    })}
                </ol>
            </div>
        )
    }
}

export default PlayerGames
