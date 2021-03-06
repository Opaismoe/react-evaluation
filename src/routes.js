import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import { SignIn, SignUp, Home, ClassOverview, AddClass, StudentOverview } from './containers'

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/batches" component={Home} />
        <Route path="/batches/:batchId" component={ClassOverview} />
        <Route path="/batchForm" component={AddClass} />
        <Route path="/students/:studentId" component={StudentOverview} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
      </div>
    )
  }
}
