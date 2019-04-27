import React, { Component } from 'react';
import { connect } from 'react-redux';
import { won } from '../actions/players';

class Opponent extends Component {
    render () {
        const { position, name } = this.props.opponent;
        return (
            <div className="card">
                <div className="pill">
                    <span>{name}</span>
                    <span>Games won: {position}</span>
                    <span><button onClick={() => { this.props.won(this.props.opponent.uid) } }>won</button></span>
                </div>
            </div>
        )
    }
};

const mapDispatchToProps = (dispatch) => ({
    won: (opponet) => dispatch(won(opponet))
})

export default connect(undefined, mapDispatchToProps)(Opponent)
