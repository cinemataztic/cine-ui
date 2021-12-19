import React, { useState } from 'react';
import { array } from '@storybook/addon-knobs';
import MyListbox from './Listbox.component';

export default {
  title: 'Example/Listbox',
  component: MyListbox,
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
    <MyListbox data={data} value={selectedAd} updatedstate={setSelectedAd} />
  );
};

export const Listboxs = Template.bind({});

Listboxs.args = {
  data: array('advertisements', [
    { id: 1, ad: 'Select ad', disabled: true },
    { id: 2, ad: 'Coco Cola-15' },
    { id: 3, ad: 'Coco Cola-30' },
    { id: 4, ad: 'Pepsi-15' },
    { id: 5, ad: 'Pepsi-30' },
  ]),
};
