import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton';
import createBatchButton from '../games/CreateBatchButton'
import './StudentCard.css'

const style = {
  float:"right",
  margin:"3px",
}

const style2 = {
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
    const { _id, name, photo, colors, mainColor, remark } = this.props

    return(
      <div className="StudentContainer">
        <Paper className="StudentCard">
          <header>
            <img src= {photo} alt="Person"/>
            <h1>
              <Link to={`/batches/${_id}/students/${_id}`}>
                { name }
              </Link>
            </h1>
          </header>
        <div>
          <p></p>
          <p>Previous colors: { colors }</p>
          <p>Main color: { mainColor }</p>
          <p>Remarks { remark }</p>
          <RaisedButton style={style} label="Remove" primary={true}/>
          <RaisedButton style={style2} label="Edit" secondary={true}/>
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
