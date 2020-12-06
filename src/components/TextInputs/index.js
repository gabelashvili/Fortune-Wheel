import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Div,
  Title,
  AddNewInput,
  Input,
  Button,
  Dots,
  List,
} from 'components/TextInputs/styles'
import {
  actions as inputActions,
  selectors as inputSelectors,
} from 'modules/InputTexts'

const TextUnputs = () => {
  // eslint-disable-next-line no-unused-vars
  const data = useSelector(inputSelectors.selectData)
  const [value, setValue] = useState('')
  const dispatch = useDispatch()
  const handleInputChange = (event) => {
    setValue(event.target.value)
  }
  const addNewInput = () => {
    dispatch(inputActions.addNewInput({
      value,
      id: data.length + 1,
    }))
    setValue('')
  }

  const removeInput = (id) => {
    dispatch(inputActions.removeNewInput(id))
  }

  return (
    <Div>
      <Title>Add Text(s)</Title>
      <AddNewInput>
        <Input spellcheck='false' onChange={handleInputChange} value={value} />
        <Button onClick={addNewInput}>+</Button>
      </AddNewInput>
      <Dots>------------------------------------------</Dots>
      {data.map((el) => (
        <List>
          <Input value={el.value} />
          <Button onClick={() => removeInput(el.id)}>-</Button>
        </List>
      ))}
    </Div>
  )
}

export default TextUnputs
