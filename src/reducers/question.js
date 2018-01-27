import { ASK_QUESTION } from '../actions/batches/askQuestion'

export default (state = batches, { type, payload } = {}) => {
  switch (type) {

    case ASK_QUESTION :
      const batchColors = { ...payload}
      return console.log(state)
    default :
      return state
  }
}
