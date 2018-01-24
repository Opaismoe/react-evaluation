import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchBatches } from '../actions/batches/fetch'
import BatchItem, { batchShape } from '../components/UI/BatchItem'
import RaisedButton from 'material-ui/RaisedButton'
import BatchForm from '../components/forms/BatchForm'

import './Home.css'


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
      <div className="LobbyWrap">
        <h1>All batches!</h1>
          <div>
            <BatchForm/>
            <RaisedButton label="Add Batch" secondary={true}/>
              <div className="Lobby">
                { this.props.batches.map(this.renderBatch) }
              </div>
          </div>
      </div>
    )
  }
}

const mapStateToProps = ({ batches }) => ({ batches })

export default connect(mapStateToProps, {fetchBatches})(Home)
