import { FETCHED_BATCHES, FETCHED_ONE_BATCH } from '../actions/batches/fetch'


export default (state = [], { type, payload } = {}) => {
  switch (type) {
    case FETCHED_STUDENTS :
      return [ ...payload ].concat(state)

    case FETCHED_ONE_STUDENT :
      const studentIds = state.map(g => g._id)
      if (studentIds.indexOf(payload._id) < 0) {
        return [{ ...payload }].concat(state)
      }
      return state.map((student) => {
        if (student._id === payload._id) {
          return { ...payload }
        }
        return student
      })

    case STUDENT_CREATED :
      const newBatch = { ...payload }
      return [newBatch].concat(state)

    case STUDENT_REMOVED :
        return state.filter((student) => (student._id !== payload._id))

    default :
      return state

  }
}
