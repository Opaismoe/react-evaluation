import { ASK_QUESTION } from '../actions/batches/askQuestion'

export default (state = {colors}, { type, payload } = {}) => {
  switch (type) {

    case ASK_QUESTION :
      const batchColors = { ...payload}
      return state
    default :
      return state
  }
}
