// src/reducers/batches.js
import { FETCHED_BATCHES, FETCHED_ONE_BATCH, BATCH_CREATED, BATCH_REMOVED } from '../actions/batches/fetch'


export default (state = [], { type, payload } = {}) => {
  switch (type) {
    case FETCHED_BATCHES :
      return [ ...payload ].concat(state)

    case FETCHED_ONE_BATCH :
      const batchIds = state.map(g => g._id)
      if (batchIds.indexOf(payload._id) < 0) {
        return [{ ...payload }].concat(state)
      }
      return state.map((batch) => {
        if (batch._id === payload._id) {
          return { ...payload }
        }
        return batch
      })

    case BATCH_CREATED :
      const newBatch = { ...payload }
      return [newBatch].concat(state)

    case BATCH_REMOVED :
        return state.filter((batch) => (batch._id !== payload._id))

    default :
      return state

  }
}
