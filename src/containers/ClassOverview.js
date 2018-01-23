import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchOneBatch } from '../actions/batches/fetch'
import Title from '../components/UI/Title'
import BatchItem from '../components/UI/BatchItem'

export class ClassOverview extends PureComponent {
  static propTypes = {
    name: PropTypes.string,
  }

  componentWillMount() {
    this.props.fetchOneBatch(this.props.match.params.batchId)
  }

  renderBatch = (batch, index) => {
    return <BatchItem key={index} { ...batch } />
  }

  render() {
    const { _id, name } = this.props

    if (!_id) return

    return (
      <div className="class page">
        <Title content={name} />
        <Title content={this.props.students[0].name} />
      </div>
    )
  }
}

const mapStateToProps = ({ batches }, { match }) => {
  const batch = batches.reduce((prev, next) => {
    if (next._id === match.params.batchId) {
      return next
    }
    return prev
  }, {})

  return {
    ...batch
  }
}

export default connect(mapStateToProps, { fetchOneBatch })(ClassOverview)
