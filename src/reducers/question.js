import {ASK_QUESTION} from '../actions/batches/askQuestion'

export default (state = [], { type, payload } = {}) => {
  switch (type) {

    case ASK_QUESTION :
      return { payload }

      default :
        return state
      }
    }
