import React, { useState } from "react";
import Checkbox from "./Checkbox.component";
import "./Checkbox.styles.css";

export default {
  title: "Example/Checkbox",
  component: Checkbox,
};

const Template = () => {
  const [checked, setChecked] = useState(false);
  return (
    <Checkbox
      checked={checked}
      label="Test me!"
      onChange={(e) => {
        setChecked(e);
      }}
    />
  );
};

export const CheckboxComponent = Template.bind({});
