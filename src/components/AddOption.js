import React from 'react';

export default class AddOption extends React.Component {
    state = { error: false }

    handleAddOption = (e) => {
        e.preventDefault();
        const player = e.target.elements.player.value.trim();
        const playerObj = {name: player, score: 0}
        const error = this.props.handleAddOption(player, playerObj);

        this.setState({ error });

        if (!error) {
            e.target.elements.player.value = '';
        }
    }

    render() {
        return (
            <div>
                {!!this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="player" placeholder="Enter player name" />
                    <button>Add player</button>
                </form>
            </div>
        )
    }
};
