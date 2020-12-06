import { useRef, useEffect, useCallback } from 'react'
import {
  drawCircle,
  drawSegment,
  drawText,
  wheelHeight,
  wheelWidth,
  handleSelectedValue,
  getCurrentRotation,
} from 'components/FortuneWheel/Canvas/helpers'
import { CanvasStyles } from 'components/FortuneWheel/Canvas/styles'
import {
  selectors as fortuneWheelSelectors,
  actions as fortuneWheelActions,
} from 'modules/FortuneWheel'
import {
  selectors as inputSelectors,
} from 'modules/InputTexts'
import { useDispatch, useSelector } from 'react-redux'

const CanvasComponent = () => {
  const dispatch = useDispatch()
  const {
    isSpinning,
    randomDeg,
  } = useSelector(fortuneWheelSelectors.selectSettings)
  const data = useSelector(inputSelectors.selectData)
  const canvas = useRef(null)
  const handleSpinningEnd = () => {
    const selectedValue = data[handleSelectedValue(randomDeg, data.length)]
    dispatch(fortuneWheelActions.handleSpinningEnd(selectedValue))
    // eslint-disable-next-line no-alert
    window.alert(data[handleSelectedValue(randomDeg, data.length)].value)
  }

  // set canvas width and height
  useEffect(() => {
    canvas.current.width = wheelWidth
    canvas.current.height = wheelHeight
  }, [])

  // draw fortune wheel
  useEffect(() => {
    const ctx = canvas.current.getContext('2d')
    drawCircle(ctx)
    for (let i = 0; i < data.length; i += 1) {
      const segmentAngel = 360 / data.length
      drawSegment(ctx, segmentAngel, i)
      drawText(ctx, data[i].value, i, data.length)
    }
  }, [canvas, data])

  // handle select value while spinning
  let prevSelect = null
  const intervalRef = useRef(null)
  const startInterval = useCallback(() => {
    if (intervalRef.current !== null) {
      return
    }
    intervalRef.current = setInterval(() => {
      const rotatedAngel = getCurrentRotation(canvas.current)
      const current = data[handleSelectedValue(rotatedAngel, data.length)]
      if (current !== prevSelect) {
        dispatch(fortuneWheelActions.setCurrentSelectedValue(current.value))
        prevSelect = current
      }
    }, 1)
  }, [data])
  const stopInterval = useCallback(() => {
    if (intervalRef.current === null) {
      return
    }
    clearInterval(intervalRef.current)
    intervalRef.current = null
  }, [])

  useEffect(() => {
    if (isSpinning) {
      startInterval()
    } else {
      stopInterval()
    }
  }, [isSpinning])

  return (
    <CanvasStyles
      ref={canvas}
      rotateDeg={randomDeg}
      onTransitionEnd={handleSpinningEnd}
    />
  )
}

export default CanvasComponent
