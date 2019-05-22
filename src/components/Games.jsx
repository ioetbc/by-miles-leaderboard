import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Games extends Component {

    render() {
        return (
            <div>
                <h3>Games</h3>
                <ol>
                    {this.props.games.map((game, i) => {
                        console.log(game)
                        return (
                            <li key={i}>
                                <p>{game.winner.name} (winner) vs {game.loser.name}</p>
                                <p>{game.playedAt}</p>
                            </li>
                        )
                    })}
                </ol>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    games: state.games
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Games)
