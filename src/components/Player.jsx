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
                <div onClick={this.toggleStats} className={!showStats ? 'pill': 'pill pill-wrapper'}>
                    <span className="position">{this.ordinalSuffix(position)}</span>
                    <span><img className="thumbnail-image" src={photoURL} /></span>
                    <span>{firstName}</span>
                    <span>Ranking: {player.ranking}</span>
                    {type === 'opponent' && [
                        <input	                    
                            type="number"	                   
                            onChange={({ target }) => this.setState({ losersScore: parseInt(target.value), error: false })}	               
                        />,
                        <span className="signed-in"><button className="won-button" onClick={this.submitWin}>won</button></span>,
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
