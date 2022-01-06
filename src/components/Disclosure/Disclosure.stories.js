import React from 'react';
import DisclosureComponent from './Disclosure.component';

export default {
  title: 'Layout/Disclosure',
  component: DisclosureComponent,
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
    <DisclosureComponent
      panelContent={DisclosurePanelContent}
      buttonContent={'Disclosure'}
    />
  );
};

export const Disclosure = Template.bind({});
