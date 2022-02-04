import React from 'react';
import FileUpload from './FileUpload.component';

export default {
  title: 'Components/FileUpload',
  component: FileUpload,
};

const Template = ({ onDrop, text, dragActiveText, dragRejectText, acceptedFileTypes, disabled, dragDisabledText }) => {
  return (
    <FileUpload
      onDrop={onDrop}
      text={text}
      dragActiveText={dragActiveText}
      acceptedFileTypes={acceptedFileTypes}
      dragRejectText={dragRejectText}
      disabled={disabled}
      dragDisabledText={dragDisabledText}
    />
  );
};


// Base file upload example
export const Base = Template.bind({});

Base.args = {
  onDrop: (acceptedFiles) => {alert(acceptedFiles.map(file => file.name))},
};


// File upload that only accepts images
export const OnlyImages = Template.bind({});

OnlyImages.args = {
  onDrop: (acceptedFiles) => {alert(acceptedFiles.map(file => file.name))},
  text: 'Upload Image (JPG, PNG)',
  dragActiveText: 'Drop file(s) here',
  acceptedFileTypes: 'image/jpeg, image/png'
};

// Disabled file upload
export const Disabled = Template.bind({});

Disabled.args = {
  onDrop: (acceptedFiles) => {alert(acceptedFiles.map(file => file.name))},
  disabled: true,
  dragDisabledText: 'File Upload is disabled'
};