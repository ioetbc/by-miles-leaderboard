import React, { Component } from 'react';
import { connect } from 'react-redux'
import { ReactComponent as Tick } from '../assets/tick.svg';
import { ReactComponent as Trophy } from '../assets/trophy.svg';
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

    toggleStats = () => this.setState({ showStats: !this.state.showStats })

    ordinalSuffix(n) {
        const j = n % 10;
        const k = n % 100;

        if (j === 1 && k !== 11) {
            return + n + "st";
        }
        if (j === 2 && k !== 12) {
            return n + "nd";
        }
        if (j === 3 && k !== 13) {
            return n + "rd";
        }
        return n + "th";
    }


    render () {
        const { auth, players, player, i } = this.props
        const { showStats } = this.state;


        const games = this.props.games.filter(game => game.winner.uid === player.uid || game.loser.uid === player.uid)
        let type = 'other'
        if (player.uid === auth.uid) type = 'you'
        if (players[i + 1] && players[i + 1].uid === auth.uid) type = 'opponent'
        const { position, name, photoURL } = player;
        const firstName = name.split(' ')[0];

        return ([
                <div className={!showStats ? 'pill': 'pill pill-wrapper'}>
                    <span className="position">{this.ordinalSuffix(position)}</span>
                    <span><img className="thumbnail-image" src={photoURL} /></span>
                    <span>{firstName}</span>
                    <span>Ranking: {player.ranking}</span>
                    <span onClick={this.toggleStats}>details</span>
                    {type === 'opponent' && [
                        <select className="dropdown" onChange={({ target }) => this.setState({ losersScore: parseInt(target.value), error: false })}	 >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="4">5</option>
                            <option value="4">6</option>
                            <option value="4">7</option>
                            <option value="4">8</option>
                            <option value="4">9</option>
                            <option value="4">10</option>
                            <option value="4">11</option>
                            <option value="4">12</option>
                            <option value="4">13</option>
                            <option value="4">14</option>
                            <option value="4">15</option>
                            <option value="4">16</option>
                            <option value="4">17</option>
                            <option value="4">18</option>
                            <option value="4">19</option>
                            <option value="4">20</option>
                            <option value="4">21</option>
                        </select>,
                        <button className="won-button" onClick={this.submitWin}>won</button>
                    ]}
                    <div className="stats">
                        <h3>Games played</h3>
                        <ul>
                            {games.map((game, i) => {
                                if (game.winner.uid == auth.uid) {
                                    return (
                                        <li key={i}>
                                            <p><strong>{game.winner.name}</strong> vs {game.loser.name}</p>
                                        </li>
                                    )
                                }
                            })}
                        </ul>
                    </div>
                    {position === 1 && <span className="trophy"><Trophy /></span>}
                </div>,
                this.state.error && <h4>Take this chance to gloat. Input the losers score first</h4>,
        ]);
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
