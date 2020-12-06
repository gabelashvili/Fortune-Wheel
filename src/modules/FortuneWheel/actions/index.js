import { constants } from 'modules/FortuneWheel'

export const handleSpinningEnd = (selectedValue) => (
  {
    type: constants.HANDLE_WHEEL_SPINNING_END,
    payload: selectedValue,
  }
)

export const handleSpinningStart = () => (
  {
    type: constants.HANDLE_WHEEL_SPINNING_START,
  }
)

export const setCurrentSelectedValue = (value) => (
  {
    type: constants.HANDLE_CURRENT_SELECTED_VALUE,
    payload: value,
  }
)
