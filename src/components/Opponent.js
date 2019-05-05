import React, { Component } from 'react';
import { connect } from 'react-redux';
import { won } from '../actions/players';

class Opponent extends Component {
    constructor(props) {
        super(props);
        this.state = { losersScore: null, error: false };
        this.submitWin = this.submitWin.bind(this);
    }

    submitWin() {
        const { losersScore, error } = this.state;
        if (typeof loserScore !== 'number') this.setState({ error: true });
        else {
            if (error) this.setState({ error: false });
            this.props.won(this.props.opponent.uid, losersScore);
        }
    }

    render () {
        const { position, name } = this.props.opponent;
        return (
            <div className="card">
                <div className="pill">
                    <span>{name}</span>
                    <span>Games won: {position}</span>
                    <input
                        type="number"
                        onChange={(losersScore) => this.setState({ losersScore })}
                    />
                    <span><button onClick={this.submitWin}>won</button></span>
                </div>
                {this.state.error &&
                    <h3>Take this chance to gloat. Input the losers score first</h3>}
            </div>
        )
    }
};

const mapDispatchToProps = (dispatch) => ({
    won: (opponet) => dispatch(won(opponet))
})

export default connect(undefined, mapDispatchToProps)(Opponent)
