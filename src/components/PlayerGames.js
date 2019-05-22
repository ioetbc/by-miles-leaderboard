import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

export class PlayerGames extends Component {

    state = { showStats: false }


    render() {
        const { auth, games } = this.props
        return (
            <div>
                <h3>Games</h3>
                <ol>
                    {games.map((game, i) => {
                        if (game.winner.uid == auth.uid) {
                            return (
                                <li key={i}>
                                    <p><strong>{game.winner.name}</strong> vs {game.loser.name}</p>
                                </li>
                            )
                        }
                    })}
                </ol>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    games: state.games,
    auth: state.auth
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerGames)
