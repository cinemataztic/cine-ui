import React from 'react';
import Disclosure from './Disclosure.component';

export default {
  title: 'Layout/Disclosure',
  component: Disclosure,
};

const DisclosurePanelContent = () => {
  return (
    <div>
      <p>
        A disclosure can hold all kinds of content.
        <br />A disclosure is also known as an accordion.
      </p>
    </div>
  );
};

const Template = ({}) => {
  return (
    <Disclosure
      panelContent={DisclosurePanelContent}
      buttonContent={'Disclosure'}
    />
  );
};

export const Base = Template.bind({});
