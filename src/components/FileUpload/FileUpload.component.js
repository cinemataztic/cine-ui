import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import './FileUpload.styles.css';
import PropTypes from 'prop-types';

const FileUpload = ({
  onDrop,
  text = 'Upload File',
  dragActiveText = 'Upload File',
  dragRejectText = 'Invalid File',
  dragDisabledText,
  acceptedFileTypes,
  disabled = false,
}) => {
  const handleDrop = useCallback((acceptedFiles) => {
    if (!onDrop) {
      console.warn('FileUpload: onDrop is not defined');
      return;
    }
    onDrop(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive, isDragReject } =
    useDropzone({
      onDrop: handleDrop,
      accept: acceptedFileTypes,
      disabled,
    });

  const DropzoneContent = () => {
    if (disabled) {
      return <div>{dragDisabledText}</div>;
    }

    if (isDragReject) {
      return <div>{dragRejectText}</div>;
    }

    if (isDragActive) {
      return <div>{dragActiveText}</div>;
    }

    return <div>{text}</div>;
  };

  let borderColor = 'border-defaultSubtle';
  if (isDragActive) {
    borderColor = 'border-primary';
  }
  if (isDragReject) {
    borderColor = 'border-danger';
  }

  return (
    <div
      {...getRootProps()}
      className={`w-full border-3 border-dashed ${borderColor} rounded-lg p-4 transition duration-150 ease-in-out ${
        disabled ? 'opacity-50' : ''
      }`}
    >
      <input {...getInputProps()} />
      <div className={`flex justify-center items-center text-defaultSubtle`}>
        <DropzoneContent />
      </div>
    </div>
  );
};

FileUpload.propTypes = {
  onDrop: PropTypes.func.isRequired,
  text: PropTypes.node,
  dragActiveText: PropTypes.node,
  acceptedFileTypes: PropTypes.string,
  disabled: PropTypes.bool,
};

FileUpload.defaultProps = {
  text: 'Upload File',
  dragActiveText: 'Upload File',
  dragRejectText: 'Invalid File',
  disabled: false,
};

export default FileUpload;
