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
  const [selectedAd, setSelectedAd] = useState(data[0].value);

  return <ListBox options={data} value={selectedAd} onChange={setSelectedAd} />;
};

export const ListboxComponent = Template.bind({});

ListboxComponent.args = {
  data: [
    { label: '1', value: 'Select ad', disabled: true },
    { label: '2', value: 'Coco Cola-15' },
    { label: '3', value: 'Coco Cola-30' },
    { label: '4', value: 'Pepsi-15' },
    { label: '5', value: 'Pepsi-30' },
  ],
};
