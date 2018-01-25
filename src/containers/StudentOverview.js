import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchOneStudent } from '../actions/students/fetch'

import StudentCard from '../components/UI/StudentCard'
import Title from '../components/UI/Title'

import RaisedButton from 'material-ui/RaisedButton'


const btnStyle = {
  minWidth: "100px",
  labelColor: "#ffffff",
}

export class StudentOverview extends PureComponent {
  static propTypes = {
    name: PropTypes.string,
  }

  componentWillMount() {
    this.props.fetchOneStudent()
  }

  renderStudent(student, index) {
    return <StudentCard key={index} {...student} />
  }

  render() {
    const { students } = this.props


    return (
      <div className="StudentWrap">

        <div className="CardWrap">
          <p>Hellloooo!?</p>
          { students.name }
        </div>
        <footer>
        </footer>
      </div>
    )
  }
}

const mapStateToProps = ({ batches, students }) => ({ batches, students })

export default connect(mapStateToProps, { fetchOneStudent })(StudentOverview)
