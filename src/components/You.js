import React, { Component } from 'react';
import moment from 'moment';
import { ReactComponent as Tick } from '../assets/tick.svg';
import PlayerStats from './PlayerStats'


class You extends Component {
    state = { showStats: false }
    toggleStats = () => this.setState({ showStats: !this.state.showStats })
    render () {
        const { position, name, photoURL, ranking } = this.props.player;
        const { index } = this.props;
        const { showStats } = this.state;
        const firstName = name.split(' ')[0];

        return (
            <div className="pill-wrapper">
                <div className="pill">
                    <span><img className="thumbnail-image" src={photoURL} /></span>
                    <span>{firstName}</span>
                    <span>{moment(position).format('do')}</span>
                    <span>Ranking: {ranking}</span>
                    <span onClick={this.toggleStats}>details</span>
                    {showStats &&
                        <PlayerStats name={name} index={index} />
                    }
                </div>
                <span className="signed-in"><Tick /></span>
            </div>
        );
    }
};

export default You;
