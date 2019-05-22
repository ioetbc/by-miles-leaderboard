import React from 'react';
import FlipMove from 'react-flip-move';
import { connect } from 'react-redux';
import You from './You';
import Opponent from './Opponent';
import Other from './Other';

const Players = (props) => {
    return (
        <div className="player">
        <FlipMove>
            {props.players.map((p, i) => {
                if (p.uid === props.auth.uid) {
                    return (
                        <You
                            key={p.uid}
                            player={p}
                        />
                    )
                }
                if (props.players[i + 1] && props.players[i + 1].uid === props.auth.uid) {
                    return (
                        <Opponent
                            key={p.uid}
                            opponent={p}
                        />
                    )
                }
                return (
                    <Other
                        key={p.uid}
                        player={p}
                    />
                )
            })}
        </FlipMove>
        </div>
    )
};

const mapStateToProps = (state) => ({
    players: state.players,
    auth: state.auth,
})

export default connect(mapStateToProps)(Players)
