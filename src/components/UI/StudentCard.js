import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton';
import createBatchButton from '../buttons/CreateBatchButton'
import './StudentCard.css'

const RemoveStyle = {
  float:"right",
  margin:"3px",
}

const EditStyle = {
  float:"left",
  margin:"3px",
}

export const studentShape = PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    colors: PropTypes.array.isRequired,
    mainColor: PropTypes.number.isRequired,
    remark: PropTypes.string.isRequired,
})

class StudentCard extends PureComponent {
  static propTypes = {
    ...studentShape.isRequired,
  }

  render() {
    const { _id, name, photo, colors, mainColor, remark } = this.props.student

    return(
      <div className="StudentContainer">
        <Paper className="StudentCard">
          <header>
            <img src= {photo} alt="Person"/>
            <h1>
              <Link to={`/students/${_id}`}>
                { name }
              </Link>
            </h1>
          </header>
        <div>
          <p></p>
          <p>Previous colors: { colors }</p>

          <p>Main color: { mainColor }</p>
          <p>Remarks { remark }</p>
          <RaisedButton style={RemoveStyle} label="Remove" primary={true}/>
          <RaisedButton style={EditStyle} label="Edit" secondary={true}/>
        </div>
      </Paper>
    </div>
    )
  }
}

const mapDispatchToProps = {
  createBatchButton
}

export default connect(null, mapDispatchToProps)(StudentCard)
