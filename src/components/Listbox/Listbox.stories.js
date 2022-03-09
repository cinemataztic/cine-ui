import React, { useState } from 'react';

import ListboxComponent from './Listbox.component';

export default {
  title: 'Forms/Listbox',
  component: ListboxComponent,
  argTypes: {
    data: {
      control: {
        type: 'array',
      },
    },
  },
};

const Template = ({ data, emptyHeader, emptyExplanation, emptyCTA, loading, loadingPlaceholder}) => {
  const [value, setValue] = useState();

  return (
    <ListboxComponent
      options={data}
      value={value}
      onChange={setValue}
      placeholder="Select option"
      emptyHeader={emptyHeader}
      emptyExplanation={emptyExplanation}
      emptyCTA={emptyCTA}
      loading={loading}
      loadingPlaceholder={loadingPlaceholder}
    />
  );
};

export const Base = Template.bind({});

Base.args = {
  data: [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
    { value: '4', label: 'Option 4' },
    { value: '5', label: 'Option 5' },
    { value: '6', label: 'Option 6' },
    { value: 7, label: 'Option 7' },
    { value: 8, label: 'Option 8' },
    { value: 9, label: 'Option 9' },
    { value: 10, label: 'Option 10' },
  ],
  emptyHeader: 'No options available.',
  emptyExplanation: "You don't seem to have any data available.",
  emptyCTA: {
    text: 'Upload ad',
    onClick: () => {
      console.log('clicked');
    },
  },
};

export const Loading = Template.bind({});

Loading.args = {
  data: [],
  loading: true,
  loadingPlaceholder: 'Loading the options...',
};