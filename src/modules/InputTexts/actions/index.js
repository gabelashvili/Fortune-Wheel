import { constants } from 'modules/InputTexts'

export const addNewInput = (text) => (
  {
    type: constants.ADD_NEW_INPUT,
    payload: text,
  }
)

export const removeNewInput = (id) => (
  {
    type: constants.REMOVE_NEW_INPUT,
    payload: id,
  }
)
