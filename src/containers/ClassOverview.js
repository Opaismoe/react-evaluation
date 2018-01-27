import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchOneBatch } from '../actions/batches/fetch'
import { fetchStudents } from '../actions/students/fetch'

import StudentCard from '../components/UI/StudentCard'
import AskQuestion from '../components/buttons/AskQuestion'
import { askQuestion } from '../actions/batches/askQuestion'

import RaisedButton from 'material-ui/RaisedButton'
import './ClassOverview.css'

let pickStudent = 0
let Result = 0
const TotResults = []


let red = []
let yellow = []
let green = []
export class ClassOverview extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      pickedStudent: ["nobodyyy"],
    }


    // functions
    this.getColors = this.getColors.bind(this)
    this.sortByColor = this.sortByColor.bind(this)
    this.whatIsIt = this.whatIsIt.bind(this)
  }

  componentWillMount() {
    this.props.fetchOneBatch(this.props.match.params.batchId)
    this.props.fetchStudents(this.props.match.params.batchId)
    }

  componentDidMount() {

  }

  renderStudent(student, index) {
    const pickedStudent = this.state.pickedStudent
    if (pickedStudent.length < 3) {
      student.colors.filter((colors, index) => {
        return this.sortByColor(colors)
      })
    }
    return <StudentCard key={index} student={student} />
  }

  setStudent = (state) => {
    this.setState({
      pickedStudent: state
    })
  }

  sortByColor = (value) => {
    console.log(value)
    if (value >= 3) {
      green.push(value)
    }
    if (value === 2) {
      return yellow.push(value)
    }
    if (value < 2) {
      return red.push(value)
    }
  }

// callback hell! it's everywhere

  whatIsIt() {
    console.log(red)
    console.log(yellow)
    console.log(green)
  }

// this looks horrible

  getColors() {
      { this.props.batches.map(batch => {
        batch.students.map((student, index) => {
          student.colors.filter((colors, index) => {
            return this.sortByColor(colors)
          })
        })
      })
    }
  }

  ChoosenStudent = () => {
    let randomNum = Math.floor(Math.random() * 100) + 1
    if (randomNum >= 47 ) {
      console.log("red")
      let pickStudent = Math.floor(Math.random() * ( red.length ));
      return this.setStudent(`red `+ pickStudent)
    }
    else if (randomNum > 21 && randomNum < 47) {
      console.log("yellow")
      let pickStudent = Math.floor(Math.random() * ( yellow.length ))
      return this.setStudent(`yellow `+ pickStudent)
    }
    else console.log("green")
    let pickStudent = Math.floor(Math.random() * ( green.length ))
    return this.setStudent(`green `+ pickStudent)
  }

  render() {
  const { batches, students, colors } = this.props

    const { _id, name, startsAt, endsAt, color, pickedStudent } = this.props.batches

    // clean this up!
    let startDate = new Date(startsAt)
    let starts = startDate.toLocaleDateString()
    let endDate = new Date(endsAt)
    let ends = endDate.toLocaleDateString()


    return (
      <div className="ClassWrap">

      <AskQuestion onClick={this.ChoosenStudent}/>
        <header style={{marginTop:"40px"}}>

          <RaisedButton style={{ float:"right"}} label="New student" secondary={true}/>
          <RaisedButton style={{ float:"right", margin:"0px 5px"}} label="Ask Question" secondary={true}/>
          <Link to={`/batches`}>
            <RaisedButton label="Back" default={true}/>
          </Link>

          <h1 style={{textAlign:"center"}}>name:{this.state.pickedStudent}</h1>
          ----- vuur pelethon ---->

          <button onClick={this.getColors}>sort that shit</button>
          <button onClick={this.whatIsIt}>whaaaat!!</button>

          <h3 style={{float:"left"}}>Start date: { startsAt}</h3>
          <h3 style={{float:"right"}}>End date: { endsAt }</h3>

          <br/>
          <hr/>
          <h3> colors { name }</h3>
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
            { batches.map(batch => {
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
    batches: state.batches,
    students: state.students,
  })


export default connect(mapStateToProps, { fetchStudents, fetchOneBatch, askQuestion })(ClassOverview)
