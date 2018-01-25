import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { createBatch } from '../../actions/batches/create'
import RaisedButton from 'material-ui/RaisedButton'
import { Link } from 'react-router-dom'
import './BatchForm.css'

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

  submitForm(event) {
    event.preventDefault()
    const newBatch = {
      name: this.refs.name.value,
      startsAt: this.refs.startsAt.value,
      endsAt: this.refs.endsAt.value,
    }
    this.props.createBatch(newBatch)
    alert("Added Class!")
  }

  render() {
    return (
      <div className="FormWrap">
        <input
          type="text"
          ref="name"
          className="name"
          placeholder="name"
          onChange={this.updateName.bind(this)}
          onKeyDown={this.updateName.bind(this)} />
        <input
          type="text"
          ref="startsAt"
          className="startsAt"
          placeholder="dd/mm/yy"
          onChange={this.updateStartDate.bind(this)}
          onKeyDown={this.updateStartDate.bind(this)} />
        <input
          type="text"
          ref="endsAt"
          className="endsAt"
          placeholder="dd/mm/yy"
          onChange={this.updateEndDate.bind(this)}
          onKeyDown={this.updateEndDate.bind(this)} />


        <div className="actions">
          <RaisedButton onClick={this.submitForm.bind(this)} label="Add" secondary={true}/>
          <Link to={`/batches`}>
            <RaisedButton label="Back" default={true} primary={true}/>
          </Link>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ Batches }) => ({ Batches })

export default connect(mapStateToProps, {createBatch})(BatchForm)
