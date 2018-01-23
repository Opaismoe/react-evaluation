import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import { SignIn, SignUp, Home, } from './containers'

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/batch/:batchId" component={null} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
      </div>
    )
  }
}
