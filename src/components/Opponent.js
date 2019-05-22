import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import HOCPlayer from './HOCPlayer'
import { won } from '../actions/players';

class Opponent extends Component {
    constructor(props) {
        super(props);
        this.state = { losersScore: null, error: false };
        this.submitWin = this.submitWin.bind(this);
    }

    submitWin() {
        const { losersScore, error } = this.state;
        if (typeof losersScore !== 'number') this.setState({ error: true });
        else {
            if (error) this.setState({ error: false });
            this.props.won(this.props.opponent.uid, losersScore);
        }
    }

    render () {
        const { position, name, photoURL, ranking } = this.props.opponent;
        const firstName = name.split(' ')[0];
        console.log('opponent position', position)
        return [
            <div className="pill-wrapper">
                <div className="pill">
                <span><img className="thumbnail-image" src={photoURL} /></span>
                <span>{firstName}</span>
                <span>{moment(position).format('do')}</span>
                <span>Ranking: {ranking}</span>
                <input
                    type="number"
                    onChange={({ target }) => this.setState({ losersScore: parseInt(target.value), error: false })}
                />
                <span><button onClick={this.submitWin}>won</button></span>
                <span>details</span>
                </div>
            </div>,
            this.state.error &&
                <h3>Take this chance to gloat. Input the losers score first</h3>,
        ]
    }
};

const mapDispatchToProps = (dispatch) => ({
    won: (opponet, losersScore) => dispatch(won(opponet, losersScore))
})

export default connect(undefined, mapDispatchToProps)(HOCPlayer(Opponent))
