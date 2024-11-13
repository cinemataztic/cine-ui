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
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzM3MTVfNDY1MzcpIj4KPHBhdGggZD0iTTExIDdIMTNWOUgxMVY3Wk0xMSAxMUgxM1YxN0gxMVYxMVpNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJDMiAxNy41MiA2LjQ4IDIyIDEyIDIyQzE3LjUyIDIyIDIyIDE3LjUyIDIyIDEyQzIyIDYuNDggMTcuNTIgMiAxMiAyWk0xMiAyMEM3LjU5IDIwIDQgMTYuNDEgNCAxMkM0IDcuNTkgNy41OSA0IDEyIDRDMTYuNDEgNCAyMCA3LjU5IDIwIDEyQzIwIDE2LjQxIDE2LjQxIDIwIDEyIDIwWiIgZmlsbD0id2hpdGUiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF8zNzE1XzQ2NTM3Ij4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo="
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