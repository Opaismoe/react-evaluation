import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { createBatch } from '../../actions/batches/create'
import 'medium-editor/dist/css/medium-editor.css'
import 'medium-editor/dist/css/themes/default.css'

class BatchForm extends PureComponent {
  constructor(props) {
    super(props)

    const { name, startsAt, endsAt } = this.props

    this.state = {
      name,
      startsAt,
      endsAt,
    }
  }

  updateName(event) {
    this.setState({
      name: this.refs.name.value
    })
  }

  updateStartDate(event) {
    this.setState({
      startsAt: this.refs.startsAt.value
    })
  }

  updateEndDate(event) {
    this.setState({
      endsAt: this.refs.endsAt.value
    })
  }

  saveBatch() {
    const {
      name,
      startsAt,
      endsAt,
    } = this.state

    const newBatch = {
      name,
      startsAt,
      endsAt,
    }
    this.props.createBatch(newBatch)
    console.log(newBatch)
  }

  submitForm(event) {
    event.preventDefault()
    const newBatch = {
      name: this.refs.name.value,
      startsAt: this.refs.startsAt.value,
      endsAt: this.refs.endsAt.value,
    }
    this.props.createBatch(newBatch)
    console.log(newBatch)
  }

  render() {
    return (
      <div className="editor">
        <input
          type="text"
          ref="name"
          className="name"
          placeholder="name"
          defaultValue={this.state.name}
          onChange={this.updateName.bind(this)}
          onKeyDown={this.updateName.bind(this)} />
        <input
          type="text"
          ref="startsAt"
          className="startsAt"
          placeholder="Start date"
          defaultValue={this.state.startsAt}
          onChange={this.updateStartDate.bind(this)}
          onKeyDown={this.updateStartDate.bind(this)} />
        <input
          type="text"
          ref="endsAt"
          className="endsAt"
          placeholder="End date"
          defaultValue={this.state.endsAt}
          onChange={this.updateEndDate.bind(this)}
          onKeyDown={this.updateEndDate.bind(this)} />


        <div className="actions">
          <button className="primary" onClick={this.saveBatch.bind(this)}>Save</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ Batches }) => ({ Batches })

export default connect(mapStateToProps, {createBatch})(BatchForm)
