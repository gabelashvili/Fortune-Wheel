import { Button, P } from 'components/FortuneWheel/SpinButton/styles'
import {
  selectors as fortuneWheel,
  actions as fortuneWheelActions,
} from 'modules/FortuneWheel'
import { useSelector, useDispatch } from 'react-redux'
import {
  selectors as inputSelectors,
} from 'modules/InputTexts'

const SpinButton = () => {
  const dispatch = useDispatch()
  const { isSpinning } = useSelector(fortuneWheel.selectSettings)
  const data = useSelector(inputSelectors.selectData)
  const currentValue = useSelector(fortuneWheel.selectCurrentSelectedValue)
  const handleClick = () => {
    if (!isSpinning && data.length > 0) {
      dispatch(fortuneWheelActions.handleSpinningStart())
    }
  }
  return (
    <Button
      onClick={handleClick}
    >
      <P>{isSpinning ? currentValue : 'SPIN'}</P>
    </Button>
  )
}

export default SpinButton
