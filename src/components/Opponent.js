import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import HOCPlayer from './HOCPlayer'
import { won } from '../actions/players';

class Opponent extends Component {
    render () {
        const { position, name, photoURL } = this.props.opponent;
        const firstName = name.split(' ')[0];
        console.log('opponent position', position)
        return (
            <div className="pill-wrapper">
                <div className="pill">
                <span><img className="thumbnail-image" src={photoURL} /></span>
                <span>{firstName}</span>
                <span>{moment(position).format('do')}</span>
                <span><button className="won-button" onClick={() => { this.props.won(this.props.opponent.uid) } }>won</button></span>
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
