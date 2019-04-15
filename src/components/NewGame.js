import React from 'react';
import Modal from 'react-modal';

const NewGame = (props) => {
    return (
        <div>
            <button onClick={props.handleNewGame}>New game</button>
            <Modal 
            isOpen={!!props.gameModal}
            contentLabel="Selected option"
            onRequestClose={props.hideModal}
        >
            <h3>Selected option</h3>
            {props.gameModal && <p>fuck</p>}
            <button onClick={props.hideModal}>Hide modal</button>
        </Modal>
        </div>
    )
};

export default NewGame;