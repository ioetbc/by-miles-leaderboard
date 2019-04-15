import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => {
    return (
        <Modal 
            isOpen={!!props.gameModal}
            contentLabel="Selected option"
            onRequestClose={props.hideModal}
        >
            <h3>Selected option</h3>
            {props.gameModal && <p>fuck</p>}
            <button onClick={props.hideModal}>Hide modal</button>
        </Modal>
    );
}

export default OptionModal;