import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import BatchForm from '../components/forms/BatchForm'

import './Home.css'


class AddClass extends PureComponent {

  render() {
    return (
      <div className="LobbyWrap">
        <h1>Add new batch!</h1>
          <div>
            <BatchForm style={{margin:"auto"}}/>
          </div>
      </div>
    )
  }
}



export default AddClass
