/* eslint-disable react/button-has-type */
import { useEffect } from 'react'
import Canvas from 'components/FortuneWheel/Canvas'
import SpinButton from 'components/FortuneWheel/SpinButton'
import { Wheel } from 'components/FortuneWheel/styles'
import { selectors as fortuneWheel } from 'modules/FortuneWheel'
import { useSelector } from 'react-redux'

const RandomText = () => {
  const { selectedValue } = useSelector(fortuneWheel.selectSettings)
  useEffect(() => {
    console.log(selectedValue)
  }, [selectedValue])

  return (
    <Wheel>
      <Canvas />
      <SpinButton />
    </Wheel>
  )
}

export default RandomText
