import React, { Component } from 'react';
import { connect } from 'react-redux';
import { find } from 'lodash';

export class Games extends Component {

    render() {
        const { index, games} = this.props;
        const gamesPlayed = games.filter(game => game.winner.uid === index || game.loser.uid === index);
    
        return (
            <div>
                <h3>Games</h3>
                <ol>
                    {gamesPlayed.map((game, i) => {
                        return (
                            <li index={i}>
                                <p>{game.winner.name} (winner) vs {game.loser.name}</p>
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
