import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Paper from 'material-ui/Paper'
import createBatchButton from '../games/CreateBatchButton'
import './StudentCard.css'

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
              { name }
            </h1>
          </header>
        <div>
          <p></p>
          <p>Previous colors: { colors }</p>
          <p>Main color: { mainColor }</p>
          <p>Remarks { remark }</p>
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
