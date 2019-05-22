import React from 'react';
import FlipMove from 'react-flip-move';
import { connect } from 'react-redux';
import Player from './Player'

const Players = (props) => {
    return (
        <div className="player">
            <FlipMove>
                {props.players.map((p, i) => {
                    return (
                        <Player
                            key={p.uid}
                            i={i}
                            player={p}
                        />
                    )
                })}
            </FlipMove>
        </div>
    )
};

const mapStateToProps = (state) => ({
    players: state.players
})

export default connect(mapStateToProps)(Players)
