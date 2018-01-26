import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Paper from 'material-ui/Paper'
import createBatchButton from '../buttons/CreateBatchButton'
import './BatchItem.css'

export const batchShape = PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    startsAt: PropTypes.string.isRequired,
    endsAt: PropTypes.string,
    batchColors: PropTypes.array,
})

class BatchItem extends PureComponent {
  static propTypes = {
    ...batchShape.isRequired,
  }

renderDate() {
}

  render() {
    const { _id, name, startsAt, endsAt } = this.props

    // clean this up
    let startDate = new Date(startsAt)
    let starts = startDate.toLocaleDateString()
    let endDate = new Date(endsAt)
    let ends = endDate.toLocaleDateString()

    return(
      <div className="BatchContainer">
        <Paper className="BatchPaper">
          <header>
            <h1>
              <Link to={`/batches/${_id}`}>
                { name }
              </Link>
            </h1>
          </header>
        <div>
          <p>Class: { name }</p>
        </div>
        <footer>
          <span style={{float:"left"}}>Start date: { starts}</span>
          <span style={{float:"right"}}>End date: { ends }</span>
        </footer>
      </Paper>
    </div>
    )
  }
}

const mapDispatchToProps = {
  createBatchButton
}

export default connect(null, mapDispatchToProps)(BatchItem)
