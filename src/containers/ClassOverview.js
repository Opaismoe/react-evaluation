import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchOneBatch } from '../actions/batches/fetch'
import { fetchStudents } from '../actions/students/fetch'

import StudentCard from '../components/UI/StudentCard'
import { askQuestion } from '../actions/batches/askQuestion'
import AskQuestion from '../components/buttons/AskQuestion'
import { batchShape } from '../components/UI/BatchItem'
import { studentShape } from '../components/UI/StudentCard'

import RaisedButton from 'material-ui/RaisedButton'
import './ClassOverview.css'


let red = []
let yellow = []
let green = []
let redStudent = []
let yellowStudent = []
let greenStudent = []

export class ClassOverview extends PureComponent {
  constructor(props) {
    super(props)


    this.state = {
      pickedStudent: [],
      student: ""
    }


    // functions
    this.sortByColor = this.sortByColor.bind(this)
    this.whatIsIt = this.whatIsIt.bind(this)
  }

  componentWillMount() {
    this.props.fetchOneBatch(this.props.match.params.batchId)
    this.props.fetchStudents(this.props.match.params.batchId)
    }

  renderStudent(student, index) {
    const pickedStudent = this.state.pickedStudent
    if (pickedStudent.length < 2) {
      student.colors.filter((colors, index) => {
      return this.sortByColor(student, colors)
      })
    }
    return <StudentCard key={index} student={student} />
  }

  setStudent = (state, student) => {
    this.props.askQuestion(state)
    this.setState({
      pickedStudent: state,
      name: student
    })
  }


  // zorg dat je de STATE van redux store krijgt!!!!
  getState = (state) => {
    this.getState({
      pickedStudent: state
    })
  }

  sortByColor = (student, value) => {
    console.log(value)
    if (value >= 3) {
      green.push(value)
      greenStudent.push(student)
      console.log(greenStudent)

    }
    if (value === 2) {
      yellow.push(value)
      yellowStudent.push(student)
    }
    if (value < 2) {
      red.push(value)
      redStudent.push(student)
    }
  }

// callback hell! it's everywhere

  whatIsIt() {
    console.log(redStudent)
    console.log(yellowStudent)
    console.log(greenStudent)
  }


  ChoosenStudent = (student) => {
    let randomNum = Math.floor(Math.random() * 100) + 1
    if (randomNum >= 47 ) {
      console.log("red")
      let pickStudent = Math.floor(Math.random() * ( red.length ));
      this.setStudent(`red ` + pickStudent)
      return this.setStudent(redStudent[pickStudent])
    }
    else if (randomNum > 21 && randomNum < 47) {
      console.log("yellow")
      let pickStudent = Math.floor(Math.random() * ( yellow.length ))
      this.setStudent(`yellow ` + pickStudent)
      return this.setStudent(yellowStudent[pickStudent])
    }
    else console.log("green")
    let pickStudent = Math.floor(Math.random() * ( green.length ))
    this.setStudent(`green ` + pickStudent)
    this.setStudent(greenStudent[pickStudent])
  }

  render() {
  const { batches, students } = this.props
    const { _id, name, startsAt, endsAt } = this.props.batches
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

          <h1 style={{textAlign:"center"}}>name:{this.state.name}</h1>


          ----- vuur pelethon ---->

          { batches.map(batch => {
            return batch.students.map((student, index) => {
            })
          })
        }
        <AskQuestion onClick={this.ChoosenStudent} student={this.state.pickedColor} name={this.state.student}/>

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

  const mapDispatchToProps = { askQuestion }

  const mapStateToProps = state => ({
    batches: state.batches,
  })


export default connect(mapStateToProps, { fetchStudents, fetchOneBatch, askQuestion })(ClassOverview)
