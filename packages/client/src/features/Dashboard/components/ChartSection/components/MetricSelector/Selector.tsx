import React from "react";
import { RadioGroup, RadioButton, RadioButtonLabel } from "./styledComponents";

interface SelectorSectionProps {
  handleOptionChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  selectedOption: string;
}

const Selector = ({
  selectedOption,
  handleOptionChange,
}: SelectorSectionProps) => {
  return (
    <RadioGroup>
      <div>
        <RadioButton
          type="radio"
          id="calories"
          name="option"
          value="calories"
          checked={selectedOption === "calories"}
          onChange={handleOptionChange}
        />
        <RadioButtonLabel htmlFor="calories">Calories</RadioButtonLabel>
      </div>
      <div>
        <RadioButton
          type="radio"
          id="maxRate"
          name="option"
          value="maxRate"
          checked={selectedOption === "maxRate"}
          onChange={handleOptionChange}
        />
        <RadioButtonLabel htmlFor="maxRate">Max Rate</RadioButtonLabel>
      </div>
      <div>
        <RadioButton
          type="radio"
          id="steps"
          name="option"
          value="steps"
          checked={selectedOption === "steps"}
          onChange={handleOptionChange}
        />
        <RadioButtonLabel htmlFor="steps">Steps</RadioButtonLabel>
      </div>
    </RadioGroup>
  );
};

export default Selector;
