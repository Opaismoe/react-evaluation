import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchOneBatch } from '../actions/batches/fetch'

import StudentCard from '../components/UI/StudentCard'
import AskQuestion from '../components/buttons/AskQuestion'

import RaisedButton from 'material-ui/RaisedButton'
import './ClassOverview.css'

let pickStudent = 0
let Result = 0
const TotResults = []
let randomNum = Math.floor(Math.random() * 100) + 1

let red = []
let yellow = []
let green = []

export class ClassOverview extends PureComponent {
  constructor(props) {
    super(props)



    this.state = {
      name: props.name,
      startsAt: props.startsAt,
      endsAt: props.endsAt,
      color: props.color,
    }

    this.getColors = this.getColors.bind(this)
    this.sortByColor = this.sortByColor.bind(this)
    this.whatIsIt = this.whatIsIt.bind(this)
    this.getRandomNum = this.getRandomNum.bind(this)
    const randomNum = this.getRandomNum(100)
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

  sortByColor = (value, index) => {
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

  whatIsIt() {
    console.log(red)
    console.log(yellow)
    console.log(green)
  }


  getColors() {
    const color = []
      { this.props.batches.map(batch => {
        batch.students.map((student, index) => {
          student.colors.filter((colors, index) => {
            return this.sortByColor(colors, index)
          })
        })
      })
    }
  }

  getRandomNum = () => {
    console.log(randomNum)
  }

  ChoosenStudent = () => {
    let randomNum = Math.floor(Math.random() * 100) + 1
    console.log(randomNum)
    if (randomNum >= 47 ) {
      console.log("red")
      return pickStudent = red[Math.floor(Math.random() * red.length)];
    }
    else if (randomNum > 21 && randomNum < 47) {
      console.log("yellow")
      return pickStudent = yellow[Math.floor(Math.random() * yellow.length)];
    }
    else console.log("green")
    return pickStudent = green[Math.floor(Math.random() * green.length)];
  }

  render() {
  const batches = this.props

    const { _id, name, startsAt, endsAt, color } = this.state

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
          <button onClick={this.getColors}>sort that shit</button>
          <button onClick={this.whatIsIt}>whaaaat!!</button>
          <button onClick={this.getRandomNum}>random num!!</button>
          <button onClick={this.ChoosenStudent}>random student!!</button>

          <h1 style={{textAlign:"center"}}>name:{name}</h1>
          <h3 style={{float:"left"}}>Start date: { startsAt}</h3>
          <h3 style={{float:"right"}}>End date: { endsAt }</h3>

          <br/>
          <hr/>
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
