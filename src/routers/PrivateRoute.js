import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
  <div>
    <Route {...rest} component={(props) => (
      isAuthenticated ? (
        <Component {...props}/>
      ) : (
        <Redirect to="/login" />
      )
    )}/>
  </div>
)

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid
})

export default connect(mapStateToProps)(PrivateRoute)