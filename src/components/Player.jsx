import React, { Component } from 'react';
import { connect } from 'react-redux'
import moment from 'moment';
import { ReactComponent as Tick } from '../assets/tick.svg';
import PlayerDetails from './PlayerDetails'
import { won } from '../actions/players'

class Player extends Component {
    constructor(props) {
        super(props);
        this.state = { losersScore: null, error: false, showStats: false };
        this.submitWin = this.submitWin.bind(this);
    }

     submitWin() {
        const { losersScore, error } = this.state;
        if (typeof losersScore !== 'number') this.setState({ error: true });
        else {
            if (error) this.setState({ error: false });
            this.props.won(this.props.player.uid, losersScore);
        }
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
        return [
            <div className="pill-wrapper" onClick={this.toggleStats}>
                <div className="pill">
                    <span>{position}</span>
                    <span><img className="thumbnail-image" src={photoURL} /></span>
                    <span>{firstName}</span>
                    <span>Ranking: {player.ranking}</span>
                    {type === 'opponent' &&
                        <input
                            type="number"
                            onChange={({ target }) => this.setState({ losersScore: parseInt(target.value), error: false })}
                        />}
                    {type === 'opponent' && <span><button className="won-button" onClick={this.submitWin}>won</button></span>}
                </div>
                {type === 'you' && <span className="signed-in"><Tick /></span>}
            </div>,
            this.state.showStats && <PlayerDetails games={games} />,
            this.state.error && <h4>Take this chance to gloat. Input the losers score first</h4>
        ];
    }
};

const mapStateToProps = (state) => ({
    players: state.players,
    auth: state.auth,
    games: state.games
})

const mapDispatchToProps = (dispatch) => ({
    won: (opponet, losersScore) => dispatch(won(opponet, losersScore))
})


export default connect(mapStateToProps, mapDispatchToProps)(Player);
