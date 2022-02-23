import React from 'react';
import Spinner from './Spinner.component';

import './Spinner.styles.css';

export default {
  title: 'Components/Spinner',
  component: Spinner,
};

const SizesTemplate = () => {
  return (
    <div className='flex space-x-8 items-center'>
      <Spinner size='x-small' label='Extra Small' />
      <Spinner size='small' label='Small' />
      <Spinner size='medium' label='Medium' />
      <Spinner size='large' label='Large' />
      <Spinner size='x-large' label='Extra Large' />
    </div>
  )
};

export const Sizes = SizesTemplate.bind({});
