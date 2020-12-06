import { constants } from 'modules/InputTexts'

const initialState = [
  {
    value: 'YES',
    id: 1,
  },
  {
    value: 'NO',
    id: 2,
  },
]

const getInputTexts = (state = initialState, action) => {
  switch (action.type) {
    case constants.ADD_NEW_INPUT:
      return [...state, action.payload]
    case constants.REMOVE_NEW_INPUT:
      return state.filter((el) => el.id !== action.payload)
    default:
      return state
  }
}

export default getInputTexts
