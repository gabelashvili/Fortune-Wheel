import styled from 'styled-components'
import RandomText from 'components/FortuneWheel'
import TextInputs from 'components/TextInputs'

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100vh;
  align-items: center;
  padding: 0 50px;
`

function App() {
  return (
    <Div>
      <RandomText />
      <TextInputs />
    </Div>
  )
}

export default App
