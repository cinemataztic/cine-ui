import React, { useState } from 'react';
import ListBox from './Listbox.component';

export default {
  title: 'Example/Listbox',
  component: ListBox,
  argTypes: {
    data: {
      control: {
        type: 'array',
      },
    },
  },
};

const Template = ({ data }) => {
  const [value, setValue] = useState();

  return (
    <ListBox
      options={data}
      value={value}
      onChange={setValue}
      placeholder="Select option"
    />
  );
};

export const ListboxComponent = Template.bind({});

ListboxComponent.args = {
  data: [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
    { value: '4', label: 'Option 4' },
    { value: '5', label: 'Option 5' },
  ],
};
