import React from 'react';

import AddOption from './AddOption';
import Players from './Players';
import Header from './Header';
import Action from './Action';
import NewGame from './NewGame'
import OptionModal from './OptionModal';

import "../styles/styles.scss";


class Leaderboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            gameModal: undefined,
            playerArr: [],
        }
    }

    componentDidMount() {
        const json = localStorage.getItem('playerArr');
        const playerArr = JSON.parse(json);
        if (playerArr) this.setState(() => ({ playerArr }));
    }

    componentDidUpdate() {
        try {
            const json = JSON.stringify(this.state.playerArr);
            localStorage.setItem('playerArr', json);
        } catch(e) {
            console.error('json is not valid');
        }
    }

    handleReset = () => {
        this.setState(() => ({ playerArr: [] }));
    }

    handleDelete = (optionToRemove) => {
        this.setState((prevState) => ({
            playerArr: prevState.playerArr.filter((o) => optionToRemove !== o)
        }));
    }

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.playerArr.length);
        const picked = this.state.playerArr[randomNum];
        this.setState(() => ({ gameModal: true }));
    }

    hideModal = () => {
        this.setState(() => ({ gameModal: undefined }));
    }

    handleAddOption = (option, optionObj) => {
        if (!option) {
            return 'enter player name'
        } else if (this.state.playerArr.indexOf(option) > -1){
            return 'player already exists'
        }
        this.setState((prevState) => ({ playerArr: prevState.playerArr.concat(optionObj) }));
    }

    handleWinOrLose = (playerToUpdate, type) => {
        const playerIndex = this.state.playerArr.map(e => e.name).indexOf(playerToUpdate);
        let playerArrCopy = this.state.playerArr;

        if (type === 'won') { // TODO refactor this so that we are not repeating the same thing
            playerArrCopy[playerIndex].score = this.state.playerArr[playerIndex].score += 1;
        } else {
            playerArrCopy[playerIndex].score = this.state.playerArr[playerIndex].score -= 1;
        }
        this.setState(() => ({ playerArr: playerArrCopy.sort((l, h) => h.score - l.score) }));
    }

    handleDetails() {
        console.log('this will be where the game details go');
    }

    handleNewGame() {
        this.setState(() => ({ gameModal: true }));
    }

    render() {
        const { playerArr, gameModal } = this.state;

        return (
            <div>
                <Header title="Leaderboard" />
                <div className="container">
                    {/*}<Action
                        hasOptions={playerArr.length > 0}
                        handlePick={this.handlePick}
                    />*/}
                    <AddOption
                        handleAddOption={this.handleAddOption}
                    />
                    {/*<NewGame
                        handleNewGame={this.handleNewGame}
                    />*/}
                    <Players
                        handleReset={this.handleReset}
                        handleDelete={this.handleDelete}
                        playerArr={playerArr}
                        handleWinOrLose={this.handleWinOrLose}
                        handleDetails={this.handleDetails}
                    />
                    {/*<OptionModal
                        gameModal={gameModal}
                        hideModal={this.hideModal}
                    />*/}
                </div>
            </div>
        )
    }
};

export default Leaderboard;