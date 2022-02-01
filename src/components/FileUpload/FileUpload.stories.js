import React from 'react';
import FileUpload from './FileUpload.component';

export default {
  title: 'Components/FileUpload',
  component: FileUpload,
};

const Template = ({ onDrop, text, dragActiveText }) => {
  return (
    <FileUpload
      onDrop={onDrop}
      text={text}
      dragActiveText={dragActiveText}
    />
  );
};

export const Base = Template.bind({});

Base.args = {
  onDrop: (acceptedFiles) => {alert(acceptedFiles.map(file => file.name))},
  text: 'Click or drag file here',
  dragActiveText: 'Drop file here'
};
