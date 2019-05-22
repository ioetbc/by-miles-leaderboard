import React, { Component } from 'react';
import { connect } from 'react-redux';
import HOCPlayer from './HOCPlayer'
import { won } from '../actions/players';

class Opponent extends Component {
    render () {
        const { position, name, photoURL } = this.props.opponent;
        const firstName = name.split(' ')[0];
        return (
            <div className="pill-wrapper">
                <div className="pill">
                <span><img className="thumbnail-image" src={photoURL} /></span>
                <span>{firstName}</span>
                <span>{position}st</span>
                <span>details</span>
                </div>
            </div>
        )
    }
};

const mapDispatchToProps = (dispatch) => ({
    won: (opponet) => dispatch(won(opponet))
})

export default connect(undefined, mapDispatchToProps)(HOCPlayer(Opponent))
