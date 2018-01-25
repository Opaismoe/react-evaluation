import React, { PureComponent } from 'react'

import BatchForm from '../components/forms/BatchForm'

import './Home.css'


class AddClass extends PureComponent {

  render() {
    return (
      <div style={{margin:"auto", width:"300px"}} className="LobbyWrap">
        <h1>Add new batch!</h1>
          <div>
            <BatchForm style={{margin:"auto"}}/>
          </div>
      </div>
    )
  }
}



export default AddClass
