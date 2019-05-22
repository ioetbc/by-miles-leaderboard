import React, { Component } from 'react';
import { connect } from 'react-redux'
import moment from 'moment';
import { ReactComponent as Tick } from '../assets/tick.svg';
import PlayerDetails from './PlayerDetails'
import { won } from '../actions/players'

class Player extends Component {

    state = {
        showStats: false
    }

    toggleStats = () => this.setState({showStats: !this.state.showStats})

    render () {
        const { auth, players, player, i } = this.props
        const games = this.props.games.filter(game => game.winner.uid === player.uid || game.loser.uid === player.uid)
        let type = 'other'
        if (player.uid === auth.uid) type = 'you'
        if (players[i + 1] && players[i + 1].uid === auth.uid) type = 'opponent'
        const { position, name, photoURL } = player;
        const firstName = name.split(' ')[0];
        return (
            <div className="pill-wrapper" onClick={this.toggleStats}>
                <div className="pill">
                    <span><img className="thumbnail-image" src={photoURL} /></span>
                    <span>{firstName}</span>
                    <span>{moment(position).format('do')}</span>
                    <span>details</span>
                </div>
                {type === 'opponent' && <span><button className="won-button" onClick={() => { this.props.won(player.uid) } }>won</button></span>}
                {type === 'you' && <span className="signed-in"><Tick /></span>}
                {this.state.showStats && <PlayerDetails games={games} /> }
            </div>
        );
    }
};

const mapStateToProps = (state) => ({
    players: state.players,
    auth: state.auth,
    games: state.games
})

const mapDispatchToProps = (dispatch) => ({
    won: (opponet) => dispatch(won(opponet))
})


export default connect(mapStateToProps, mapDispatchToProps)(Player);
