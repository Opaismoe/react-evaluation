import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchOneBatch } from '../actions/batches/fetch'

import StudentCard from '../components/UI/StudentCard'
import AskQuestion from '../components/buttons/AskQuestion'

import RaisedButton from 'material-ui/RaisedButton'
import './ClassOverview.css'

let Result = 0
const TotResults = []

const red = []
const yellow = []
const green = []

export class ClassOverview extends PureComponent {
  constructor(props) {
    super(props)

    const { name, startsAt, endsAt, colors } = this.props.batches

    this.state = {
      name: props.name,
      startsAt: props.startsAt,
      endsAt: props.endsAt,
      colors: props.colors,
    }
  }

  componentWillMount() {
    this.props.fetchOneBatch(this.props.match.params.batchId)
  }

  renderStudent(student, index) {
    return <StudentCard key={index} student={student} />
  }

  returnColors(student, index) {
    return console.log('hellooo')
  }

  render() {
  const batches = this.props
  const color = []

    { this.props.batches.map(batch => {
      batch.students.map((student, index) => {
        student.colors.map((colors, index) => {
          return color.push(colors)
        })
      })
    })
  }
    const { _id, name, startsAt, endsAt, batchColors } = this.state

    // clean this up!
    let startDate = new Date(startsAt)
    let starts = startDate.toLocaleDateString()
    let endDate = new Date(endsAt)
    let ends = endDate.toLocaleDateString()

    return (

      <div className="ClassWrap">

        <header style={{marginTop:"40px"}}>

          <RaisedButton style={{ float:"right"}} label="New student" secondary={true}/>
          <RaisedButton style={{ float:"right", margin:"0px 5px"}} label="Ask Question" secondary={true}/>
          <Link to={`/batches`}>
            <RaisedButton label="Back" default={true}/>
          </Link>
          <AskQuestion />

          <h1 style={{textAlign:"center"}}>name:{this.props.batches.name}</h1>
          <h3 style={{float:"left"}}>Start date: { starts}</h3>
          <h3 style={{float:"right"}}>End date: { ends }</h3>
          <h3> colors { color }</h3>

          <hr/>
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
        <h3 >{ _id }</h3>
        <h3 > HALLO</h3>
          <div className="CardWrap">
            { this.props.batches.map(batch => {
                return batch.students.map((student, index) => {
                  return this.renderStudent(student, index)
             })
           })
         }
          </div>
        </div>
      )
    }
  }


const mapStateToProps = state => ({
  colors: state.batches.students,
  batches: state.batches,
})


export default connect(mapStateToProps, { fetchOneBatch })(ClassOverview)
