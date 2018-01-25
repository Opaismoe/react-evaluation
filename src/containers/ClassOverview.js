import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchOneBatch } from '../actions/batches/fetch'
import { batchShape } from '../components/UI/BatchItem'

import StudentCard from '../components/UI/StudentCard'
import Title from '../components/UI/Title'

import RaisedButton from 'material-ui/RaisedButton'
import './ClassOverview.css'

let Result = 0
const TotResults = []

const btnStyle = {
  minWidth: "100px",
  labelColor: "#ffffff",
}

const red = []
const yellow = []
const green = []

export class ClassOverview extends PureComponent {
  static propTypes = {
    name: PropTypes.string,
    batchColors: PropTypes.array,
  }

  componentWillMount() {
    this.props.fetchOneBatch(this.props.match.params.batchId)
  }

  renderStudent(student, index) {
    return <StudentCard key={index} {...student} />
  }

  TotPercent = (arr, batchColors) => {
    Result = red.length / batchColors.length * 100
    return TotResults.push(Math.round(Result))
  }

  render() {
    const { _id, name, startsAt, endsAt, batchColors  } = this.props

    if (!_id) return

    return (
      <div className="ClassWrap">

        <header style={{marginTop:"40px"}}>
          <RaisedButton style={{ float:"right"}} label="New student" secondary={true}/>
          <RaisedButton style={{ float:"right", margin:"0px 5px"}} label="Ask Question" secondary={true}/>
          <Link to={`/batches`}>
            <RaisedButton label="Back" default={true}/>
          </Link>
          <h1 style={{textAlign:"center"}}>{name}</h1>
          <h1 style={{textAlign:"center"}}>{startsAt}</h1>
          <h1 style={{textAlign:"center"}}>{endsAt}</h1>
          <h1 style={{textAlign:"center"}}>Batch colors: {batchColors}</h1>
          {console.log(red)}
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
