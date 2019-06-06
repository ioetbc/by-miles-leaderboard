import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

export class PlayerGames extends Component {

    state = { showStats: false }

    render() {
        const { auth, games=[] } = this.props
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

const mapStateToProps = (state) => ({
    auth: state.auth
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerGames)
