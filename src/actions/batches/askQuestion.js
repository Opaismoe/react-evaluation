import API from '../../api/client'
import {
  APP_LOADING,
  APP_DONE_LOADING,
  LOAD_ERROR,
  LOAD_SUCCESS
} from '../loading'

const api = new API()
export const ASK_QUESTION = 'ASK_QUESTION'

export const askQuestion = (pickedStudent) => ({
  type: ASK_QUESTION,
  payload: {pickedStudent}
})
