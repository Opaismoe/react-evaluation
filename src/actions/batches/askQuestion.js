export const ASK_QUESTION = 'ASK_QUESTION'

export const askQuestion = (pickedStudent) => ({
  type: ASK_QUESTION,
  payload: pickedStudent
})
