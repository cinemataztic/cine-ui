import React from 'react';
import DisclosureComponent from './Disclosure.component';

export default {
  title: 'Example/Disclosure',
  component: DisclosureComponent,
};

const DisclosurePanelContent = () => {
  return (
    <>
      <div className='list-none flex flex-col space-y-4'>
        <li>1. Spot details</li>
        <li>2. Creatives</li>
        <li>3. Day & Time</li>
        <li>4. Audience</li>
        <li>5. Distribution</li>
        <li>6. Budget</li>
      </div>
    </>
  );
};

const Template = ({}) => {
  return (
    <DisclosureComponent
      panelContent={DisclosurePanelContent}
      buttonContent={'Spot 1'}
      width={'w-60'}
    />
  );
};

export const DisclosureComp = Template.bind({});
