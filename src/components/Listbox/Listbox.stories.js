import React, { useState } from 'react';
import { array } from '@storybook/addon-knobs';
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
  const [selectedAd, setSelectedAd] = useState(data[0]);

  return (
    <ListBox
      data={data}
      value={selectedAd}
      updatedstate={setSelectedAd}
      bgColor={'bg-secondary'}
      borderColor={'border-primary'}
      textColor={'text-white'}
    />
  );
};

export const ListboxComponent = Template.bind({});

ListboxComponent.args = {
  data: array('advertisements', [
    { id: 1, ad: 'Select ad', disabled: true },
    { id: 2, ad: 'Coco Cola-15' },
    { id: 3, ad: 'Coco Cola-30' },
    { id: 4, ad: 'Pepsi-15' },
    { id: 5, ad: 'Pepsi-30' },
  ]),
};
