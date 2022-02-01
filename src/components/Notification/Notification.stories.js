import React from 'react';
import Notification from './Notification.component';

export default {
  title: 'Components/Notification',
  component: Notification,
};

const Template = ({ title, text, iconUrl }) => {
  return <Notification title={title} text={text} iconUrl={iconUrl} />;
};

export const Base = Template.bind({});

Base.args = {
  title: 'Upcoming feature - more custom options',
  text: 'Soon we will enable the possibility for you to specify your target audience even more by selecting branding, device, online behaviour, gender, age, etc.',
  iconUrl:
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkgNUgxMVY3SDlWNVpNOSA5SDExVjE1SDlWOVpNMTAgMEM0LjQ4IDAgMCA0LjQ4IDAgMTBDMCAxNS41MiA0LjQ4IDIwIDEwIDIwQzE1LjUyIDIwIDIwIDE1LjUyIDIwIDEwQzIwIDQuNDggMTUuNTIgMCAxMCAwWk0xMCAxOEM1LjU5IDE4IDIgMTQuNDEgMiAxMEMyIDUuNTkgNS41OSAyIDEwIDJDMTQuNDEgMiAxOCA1LjU5IDE4IDEwQzE4IDE0LjQxIDE0LjQxIDE4IDEwIDE4WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==',
};
