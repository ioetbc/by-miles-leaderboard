import React from 'react'
import { connect } from 'react-redux'
import { firebase, googleAuthProvider } from '../firebase'
import { login } from '../actions/auth'

export class LoginPage extends React.Component {

    handleGoogleLogin = () => {
        firebase.auth().signInWithPopup(googleAuthProvider).then((result) => {
            this.props.login(result.user)
        })
    }


  render() {
    return (
    <div id="login-page">
        <button className="login-button" onClick={this.handleGoogleLogin}>Google Login</button>
    </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
    login: (user) => dispatch(login(user)),
})

export default connect(undefined, mapDispatchToProps)(LoginPage)