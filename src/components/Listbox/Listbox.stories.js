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
  const [selectedAd, setSelectedAd] = useState(data[0].label);

  console.log(selectedAd);

  return <ListBox options={data} value={selectedAd} onChange={setSelectedAd} />;
};

export const ListboxComponent = Template.bind({});

ListboxComponent.args = {
  data: [
    { id: '1', label: 'Select ad', disabled: true },
    { id: '2', label: 'Coco Cola-15' },
    { id: '3', label: 'Coco Cola-30' },
    { id: '4', label: 'Pepsi-15' },
    { id: '5', label: 'Pepsi-30' },
  ],
};
