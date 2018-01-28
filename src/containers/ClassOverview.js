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
import StarIcon from 'material-ui/svg-icons/action/visibility'
import RaisedButton from 'material-ui/RaisedButton'
import './ClassOverview.css'


let red = []
let yellow = []
let green = []
let redStudent = []
let yellowStudent = []
let greenStudent = []
let TotResults = []

export class ClassOverview extends PureComponent {
constructor(props) {
    super(props)

    this.state = {
      pickedStudent: [],
      color: "rgb(210, 210, 210)",
    }
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

  setStudent = (state) => {
    this.props.askQuestion(state)
    this.setState({
      pickedStudent: state,
    })
  }

  setColorGreen() {
    this.setState({
      color: '#00ff4c'
    })
  }
  setColorYellow() {
    this.setState({
      color: '#ffe600'
    })
  }
  setColorRed() {
    this.setState({
      color: '#ff0000'
    })
  }

  sortByColor = (student, value) => {
    if (value >= 3) {
      green.push(value)
      greenStudent.push(student)
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

  setColor() {
    const color = this.state.pickedStudent.colors
    if (color[0] === 3) {
    } else if (color[0] === 2) {
      this.setColorYellow()
    } else {
      this.setColorRed()
    }
  }

  ChoosenStudent = (student) => {
    let randomNum = Math.floor(Math.random() * 100) + 1
    if (randomNum >= 47 ) {
      let numStudent = Math.floor(Math.random() * ( red.length ));
      this.setStudent(redStudent[numStudent])
      return this.setColorRed()
    }
    else if (randomNum > 21 && randomNum < 47) {
      let numStudent = Math.floor(Math.random() * ( yellow.length ))
      this.setStudent(yellowStudent[numStudent])
      return this.setColorYellow()
    }
    else; let numStudent = Math.floor(Math.random() * ( green.length ))
    this.setStudent(greenStudent[numStudent])
    return this.setColorGreen()
  }

  render() {
  const { batches, students } = this.props
    const { _id, startsAt, endsAt } = this.props
    let color = this.state.color
    const name = this.state.pickedStudent.name

    return (
      <div className="ClassWrap">

        <header style={{marginTop:"40px"}}>
          <RaisedButton
            style={{ width:"150px"}}
            label={name}
            backgroundColor={color}
            fullWidth={true}
            icon={<StarIcon />}
          />

          <RaisedButton style={{ float:"right"}} label="New student"/>

          <AskQuestion
            style={{ float:"right", margin:"0px 5px"}}
            label="Ask Question"
            secondary={true}
            onClick={this.ChoosenStudent}
          />

          <br/>
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

  const mapDispatchToProps = { fetch: fetchStudents }

  const mapStateToProps = state => ({
    batches: state.batches,
    pickedStudent: state.pickedStudent
  })


export default connect(mapStateToProps, { fetchStudents, fetchOneBatch, askQuestion })(ClassOverview)
