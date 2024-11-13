import React from 'react';
import Tooltip from './Tooltip.component';

export default {
  title: 'components/Tooltip',
  component: Tooltip,
};

const Template = ({text, position}) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Tooltip
        text={text}
        position={position}
      >
        <img
          src="https://img.icons8.com/color/30/00FFFF/info.png"
          className="icon"
        />
      </Tooltip>
    </div>
  );
};

export const Base = Template.bind({});

Base.args = {
  text: 'Lorem ipsum solor sit at amet, consectetur dolor adipiscing elit.',
  position: 'top'
};