import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'
import { fetchBatches } from '../../actions/batches/fetch'
import { askQuestion } from '../../actions/batches/askQuestion'
import StarIcon from 'material-ui/svg-icons/action/favorite'
import BatchItem, { batchShape } from '../../components/UI/BatchItem'
import EvaluationCard from '../UI/EvaluationCard'


export const evaluationShape = PropTypes.shape({
    colors: PropTypes.number,
    remark: PropTypes.string
})


class AskQuestion extends PureComponent {
  static propTypes = {
    evaluation: PropTypes.array,
  }

  constructor(props) {
  super(props)


    this.printSomething = this.printSomething.bind(this)
    this.renderQuestion = this.renderQuestion.bind(this)

  }



  printSomething(state) {
    this.props.askQuestion(state)
  }

  renderEvaluation(evaluation, index) {
    return <EvaluationCard key={index} {...evaluation} />
  }

  renderQuestion() {
    const { color } = this.props
    this.printSomething({color})
  }

  render() {
    const { color, remark } = this.props


    return (
      <div className="AskQuestion">
        <p>{color}</p>
        <RaisedButton
          label={remark}
          primary={true}
          onClick={() => this.renderQuestion({ color })}
          icon={<StarIcon />} />
      </div>
    )
  }
}

const mapStateToProps = ({ batches, askQuestion }) => ({ batches, askQuestion })

export default connect(mapStateToProps, { fetchBatches, askQuestion })(AskQuestion)
