import { constants } from 'modules/FortuneWheel'

const initialState = 2

const getCurrentDetail = (state = initialState, action) => {
  switch (action.type) {
    case constants.HANDLE_CURRENT_SELECTED_VALUE:
      return action.payload.toString().slice(0, 5)
    default:
      return state
  }
}

export default getCurrentDetail
