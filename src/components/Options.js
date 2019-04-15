import React from 'react';
// import FlipMove from 'react-flip-move';
import Option from './Option';

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleReset}>reset</button>
            {props.playerArr.length === 0 && <p>Add a player</p>}
            <ul className="player">

                    {props.playerArr.map(p => (
                        <Option
                            key={p.name}
                            text={p.name}
                            handleDelete={props.handleDelete}
                            score={p.score}
                            handleWinOrLose={props.handleWinOrLose}
                            handleDetails={props.handleDetails}
                        />
                    ))}

            </ul>
        </div>
    )
};

export default Options;