import React from 'react'
import PlayerStats from './PlayerStats'

const wrapper = (WrapperComponent) => {
    return class extends WrapperComponent {

        state = { showStats: false }

        render() {
            return (
                <div onClick={this.toggleStats} >
                    { super.render() }
                    { this.state.showStats && <PlayerStats /> }
                </div>
            )
        }   
    }
}

export default wrapper