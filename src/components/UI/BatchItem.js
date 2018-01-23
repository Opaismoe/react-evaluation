import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Paper from 'material-ui/Paper'
import createBatchButton from '../games/CreateBatchButton'
import './BatchItem.css'

export const batchShape = PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    startsAt: PropTypes.string.isRequired,
    endsAt: PropTypes.string,
})

class BatchItem extends PureComponent {
  static propTypes = {
    ...batchShape.isRequired,
  }

  render() {
    const { _id, name, startsAt, endsAt } = this.props

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
          <span style={{float:"left"}}>Start date: { startsAt }</span>
          <span style={{float:"right"}}>End date: { endsAt }</span>
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
