import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchOneStudent } from '../actions/students/fetch'
import StudentCard from '../components/UI/StudentCard'

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
    const { name } = this.props
    return (
      <div className="StudentWrap">
        <div className="CardWrap">
          <h2>42</h2>
          <p>Hellloooo!?</p>
          { name }
        </div>
        <footer>
        </footer>
      </div>
    )
  }
}

const mapStateToProps = ({ batches, students }) => ({ batches, students })

export default connect(mapStateToProps, { fetchOneStudent })(StudentOverview)
