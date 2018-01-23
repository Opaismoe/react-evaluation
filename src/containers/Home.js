import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchBatches } from '../actions/batches/fetch'
import BatchItem, { batchShape } from '../components/UI/BatchItem'

import Paper from 'material-ui/Paper'
import Menu from 'material-ui/Menu'


class Home extends PureComponent {
  static propTypes = {
    batches: PropTypes.arrayOf(batchShape).isRequired,
  }

  componentWillMount() {
    this.props.fetchBatches()
  }

  renderBatch = (batch, index) => {
    return <BatchItem key={index} { ...batch } />
  }

  render() {
    return (
      <div className="Lobby">
        <h1>All batches!</h1>
        <Paper className="paper">
          <Menu>
            { this.props.batches.map(this.renderBatch) }
          </Menu>
        </Paper>
      </div>
    )
  }
}

const mapStateToProps = ({ batches }) => ({ batches })

export default connect(mapStateToProps, {fetchBatches})(Home)
