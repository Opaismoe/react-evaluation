import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'
import { fetchBatches } from '../../actions/batches/fetch'
import { askQuestion } from '../../actions/batches/askQuestion'
import StarIcon from 'material-ui/svg-icons/action/favorite'
import BatchItem, { batchShape } from '../../components/UI/BatchItem'


export const studentShape = PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    colors: PropTypes.array.isRequired,
    mainColor: PropTypes.number.isRequired,
    remark: PropTypes.string.isRequired,
})

class AskQuestion extends PureComponent {
  static propTypes = {
    ...studentShape.isRequired,
  }

  constructor(props) {
  super(props)
    const { colors } = this.props
    console.log(colors)

    this.state = {
      colors,
    }


    this.printSomething = this.printSomething.bind(this)
    this.renderQuestion = this.renderQuestion.bind(this)

  }

  printSomething(state) {
    this.props.askQuestion(state)
    console.log(state)
  }

  renderQuestion(props) {
    this.props.askQuestion()
    this.setState({
      colors: this.refs.colors.value
    })
  }

  render() {


    return (
      <div className="AskQuestion">
        <p>here i am</p>
        <RaisedButton
          label="wtf"
          primary={true}
          onClick={(prop) => this.renderQuestion(prop)}
          icon={<StarIcon />}
          ref="colors" />

      </div>
    )
  }
}

const mapStateToProps = ({ batches, askQuestion }) => ({ batches, askQuestion })

export default connect(mapStateToProps, { fetchBatches, askQuestion })(AskQuestion)