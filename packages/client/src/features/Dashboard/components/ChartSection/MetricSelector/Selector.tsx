import React, { useState, ChangeEvent } from 'react'
import { RadioGroup, RadioButton, RadioButtonLabel } from './styledComponents'
const Selector = () => {
  const [selectedOption, setSelectedOption] = useState('')

  const handleOptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value)
  }

  return (
    <RadioGroup>
      <div>
        <RadioButton
          type="radio"
          id="calories"
          name="option"
          value="calories"
          checked={selectedOption === 'calories'}
          onChange={handleOptionChange}
        />
        <RadioButtonLabel htmlFor="calories">Calories</RadioButtonLabel>
      </div>
      <div>
        <RadioButton
          type="radio"
          id="max_rate"
          name="option"
          value="max_rate"
          checked={selectedOption === 'max_rate'}
          onChange={handleOptionChange}
        />
        <RadioButtonLabel htmlFor="max_rate">Max Rate</RadioButtonLabel>
      </div>
      <div>
        <RadioButton
          type="radio"
          id="steps"
          name="option"
          value="steps"
          checked={selectedOption === 'steps'}
          onChange={handleOptionChange}
        />
        <RadioButtonLabel htmlFor="steps">Steps</RadioButtonLabel>
      </div>
    </RadioGroup>
  )
}

export default Selector
