import React from 'react';
// import FlipMove from 'react-flip-move';
import { connect } from 'react-redux';
import You from './You';
import Opponent from './Opponent';
import Other from './Other';

const Players = (props) => {
    return (
        <div>
            <button onClick={props.handleReset}>reset</button>
            {props.players.length === 0 && <p>Add a player</p>}
            <ul className="player">
                {props.players.map((p, i) => {
                    if (p.uid === props.auth.uid) return <You key={p.uid} player={p} />
                    if (props.players[i - 1] === props.auth.uid) return <Opponent key={p.uid} opponent={p} />
                    return <Other key={p.uid} player={p} />
                })}
            </ul>
        </div>
    )
};

const mapStateToProps = (state) => ({
    players: state.players,
    auth: state.auth,
})

export default connect(mapStateToProps)(Players)
