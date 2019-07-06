import React from 'react';
import Players from './Players';
import Games from './PlayerGames'


import "../styles/style.scss";


class Leaderboard extends React.Component {

    render() {

        return (
            <div>
                <div className="container">
                    <Players />
                </div>
            </div>
        )
    }
};

export default Leaderboard;