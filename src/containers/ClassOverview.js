import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchOneBatch } from '../actions/batches/fetch'

import StudentCard from '../components/UI/StudentCard'
import Title from '../components/UI/Title'

import RaisedButton from 'material-ui/RaisedButton'
import './ClassOverview.css'


const btnStyle = {
  minWidth: "100px",
  labelColor: "#ffffff",
}

export class ClassOverview extends PureComponent {
  static propTypes = {
    name: PropTypes.string,
  }

  componentWillMount() {
    this.props.fetchOneBatch(this.props.match.params.batchId)
  }

  renderStudent(student, index) {
    return <StudentCard key={index} {...student} />
  }

  render() {
    const { _id, name } = this.props

    if (!_id) return

    return (
      <div className="ClassWrap">

        <header style={{marginTop:"40px"}}>
          <RaisedButton style={{ float:"right"}} label="New student" secondary={true}/>
          <Link to={`/batches`}>
            <RaisedButton label="Back" default={true}/>
          </Link>
          <h1 style={{textAlign:"center"}}>Batch nr</h1>
        </header>

        <div className="ClassProgressBar">
          <RaisedButton
            label="60%"
            disabledLabelColor={"#0029ff"}
            className="btnProgressMain"
            disabledBackgroundColor={"#05ff00"}
            disabled={true} />
          <RaisedButton
            label="25%"
            disabledLabelColor={"#0029ff"}
            className="btnProgressMain"
            disabledBackgroundColor={"#ffe600"}
            disabled={true} />
          <RaisedButton
            label="15%"
            disabledLabelColor={"#0029ff"}
            className="btnProgressMain"
            disabledBackgroundColor={"#ff0000"}
            disabled={true} />
        </div>

        <div className="CardWrap">
          { this.props.students.map(this.renderStudent) }
        </div>
        <footer>
        </footer>
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
