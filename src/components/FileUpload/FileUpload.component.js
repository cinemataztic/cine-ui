import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import './FileUpload.styles.css'
import PropTypes from 'prop-types';


const FileUpload = ({ onDrop, text='Upload File', dragActiveText='Upload File', dragRejectText='Invalid File', acceptedFileTypes }) => {
  const handleDrop = useCallback(acceptedFiles => {
    if (!onDrop) {
      console.warn('FileUpload: onDrop is not defined')
      return
    }
    onDrop(acceptedFiles)
  }, [])

  const {getRootProps, getInputProps, isDragActive, isDragReject} = useDropzone({
    onDrop: handleDrop,
    accept: acceptedFileTypes
  })

  const DropzoneContent = () => {
    if (isDragReject) {
      return <div>{dragRejectText}</div>
    }

    if (isDragActive) {
      return <div>{dragActiveText}</div>
    }

    return <div>{text}</div>
  }

  return (
    <div {...getRootProps()} className={`w-full border-2 border-dashed  ${isDragReject ? 'border-red-300' : 'border-gray-300'} rounded-lg p-4 transition-opacity duration-150 ease-in-out ${isDragActive ? 'opacity-80' : ''}`}>
      <input {...getInputProps()} />
      <div className={`flex justify-center items-center ${isDragReject ? 'text-red-300' : 'text-gray-300'}`}>
        <DropzoneContent />
      </div>
    </div>
  )
};

FileUpload.PropTypes = {
  onDrop: PropTypes.func.isRequired,
  text: PropTypes.node,
  dragActiveText: PropTypes.node,
  acceptedFileTypes: PropTypes.string
}

FileUpload.defaultProps = {
  text: 'Upload File',
  dragActiveText: 'Upload File',
  dragRejectText: 'Invalid File',
}

export default FileUpload;
