import React, { Component } from 'react';

class Option extends Component {
    render () {
        const { score, handleWinOrLose, text, handleDelete, handleDetails } = this.props
        return (
            <div className="card">
                <div className="pill">
                    <li>{text}</li>
                    <li>Games won: {score}</li>
                    <li><button onClick={() => { handleWinOrLose(text, 'won') } }>won</button></li>
                    <li><button onClick={() => { handleWinOrLose(text, 'lose')}}>lost</button></li>
                    <li><a className="pill__details" onClick={handleDetails}>details</a></li>
                </div>
                <button className="pill__remove" onClick={(e) => { handleDelete(text) }}>x</button>
            </div>
        )
    }
};

export default Option;