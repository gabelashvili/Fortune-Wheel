import { constants } from 'modules/FortuneWheel'
import { randomNumber } from 'helpers'

const initialState = {
  isSpinning: false,
  spinningTime: 8,
  selectedValue: null,
  randomDeg: 0,
}

const getSettings = (state = initialState, action) => {
  switch (action.type) {
    case constants.FORTUNE_WHEEL_SETTINGS:
      return {
        ...initialState,
      }
    case constants.HANDLE_WHEEL_SPINNING_END:
      return {
        ...initialState,
        isSpinning: false,
        selectedValue: action.payload,
        randomDeg: state.randomDeg,
      }
    case constants.HANDLE_WHEEL_SPINNING_START:
      return {
        ...initialState,
        isSpinning: true,
        randomDeg: state.randomDeg + randomNumber(2000, 4000),
      }
    default:
      return state
  }
}

export default getSettings
