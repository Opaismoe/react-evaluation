import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import createBatchButton from '../games/CreateBatchButton'

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
      <article className="BatchItem">
      <header>
          <h1>
          <Link to={`/batches/${_id}`}>
            { name }
          </Link>
          </h1>
        </header>
      <div>
        <p>{ name }</p>
      </div>
      <footer>
        <p>{ startsAt }</p>
        <p>{ endsAt }</p>
      </footer>
      </article>
    )
  }
}

const mapDispatchToProps = {
  createBatchButton
}

export default connect(null, mapDispatchToProps)(BatchItem)
